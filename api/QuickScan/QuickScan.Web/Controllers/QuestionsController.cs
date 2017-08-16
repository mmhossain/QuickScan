using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AutoMapper;
using System.Web.Http.Cors;
using QuickScan.Data.Repository;
using QuickScan.Domain;
using QuickScan.Web.DTO;

namespace QuickScan.Web.Controllers
{
    [RoutePrefix(Constant.QuesionV1)]
    public class QuestionsController : ApiController
    {
        private readonly IQuestionRepository _questionRepository = null;
        private readonly IMappingEngine _mapper = Mapper.Engine;

        public QuestionsController(IQuestionRepository repository, IMappingEngine mapper)
        {
            _questionRepository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("allquesions")]
        public HttpResponseMessage GetAllQuestions()
        {
            var questions = _questionRepository.GetAllQuestions();
            if (questions != null && questions.Any())
            {
                return Request.CreateResponse<IEnumerable<QuestionDto>>(
                            HttpStatusCode.OK,
                            _mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDto>>(questions));
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        [HttpGet]
        [Route("questionsbycategory/{categoryId}")]
        public HttpResponseMessage GetQuestionsByCategory(string categoryId)
        {
            var questions = _questionRepository.GetQuestionsByCategory(categoryId);
            if (questions != null && questions.Any())
            {
                return Request.CreateResponse<IEnumerable<QuestionDto>>(
                            HttpStatusCode.OK,
                            _mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDto>>(questions));
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        [HttpGet]
        [Route("getquestionbyid/{id}")]
        public HttpResponseMessage GetQuesionById(string id)
        {
            var question = _questionRepository.GetQuesionById(id);
            if (question == null)
            {
                var response = Request.CreateResponse(HttpStatusCode.NotFound, "Question not found");
                throw new HttpResponseException(response);
            }
            return Request.CreateResponse<QuestionDto>(
                        HttpStatusCode.OK,
                        _mapper.Map<Question, QuestionDto>(question));
        }

        [HttpPost]
        [Route("savequestion")]
        public HttpResponseMessage SaveQuesion([FromBody]QuestionDto questionDto)
        {
            var question = _questionRepository.GetQuesionById(questionDto.QuestionId);
            if (question == null)
            {
                var response = Request.CreateResponse(HttpStatusCode.NotFound, "Question not found");
                throw new HttpResponseException(response);
            }
            return Request.CreateResponse<QuestionDto>(
                        HttpStatusCode.OK,
                        _mapper.Map<Question, QuestionDto>(question));
        }

        protected override void Dispose(bool disposing)
        {
            if (_questionRepository != null)
                _questionRepository.Dispose();

            base.Dispose(disposing);
        }
    }
}