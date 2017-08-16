using AutoMapper;
using QuickScan.Data.Repository;
using QuickScan.Domain;
using QuickScan.Web.DTO;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace QuickScan.Web.Controllers
{
    [RoutePrefix(Constant.CategoryV1)]
    public class CategoriesController : ApiController
    {
        private readonly ICategoryRepository _categoryRepository = null;
        private readonly IMappingEngine _mapper = Mapper.Engine;
        
        public CategoriesController(ICategoryRepository repository, IMappingEngine mapper)
        {
            _categoryRepository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("allgenres")]
        public HttpResponseMessage GetAllGenres()
        {
            var genres = _categoryRepository.GetAllGenres();
            if (genres != null && genres.Any())
            {
                return Request.CreateResponse<IEnumerable<GenreDto>>(
                            HttpStatusCode.OK,
                            _mapper.Map<IEnumerable<Genre>, IEnumerable<GenreDto>>(genres));
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        [HttpGet]
        [Route("allcategories")]
        public HttpResponseMessage GetAllCategories()
        {
            var categories = _categoryRepository.GetAllCategories();
            if (categories != null && categories.Any())
            {
                return Request.CreateResponse<IEnumerable<CategoryDto>>(
                            HttpStatusCode.OK, 
                            _mapper.Map<IEnumerable<Category>, IEnumerable<CategoryDto>>(categories.OrderBy(c => c.Title)));
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        [HttpGet]
        [Route("allgenreswithcategories")]
        public HttpResponseMessage GetAllGenresWithCategories()
        {
            var genresWithCategories = _categoryRepository.GetAllGenresWithCategories();
            if (genresWithCategories != null)
            {
                return Request.CreateResponse<IEnumerable<GenreCategoryDto>>(
                            HttpStatusCode.OK,
                            _mapper.Map<IEnumerable<GenreCategory>, IEnumerable<GenreCategoryDto>>(genresWithCategories));
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        [HttpGet]
        [Route("getcategorybyid/{categoryId}")]
        public HttpResponseMessage GetCategoryById(string categoryId)
        {
            var category = _categoryRepository.GetCategoryById(categoryId);
            if (category == null)
            {
                var response = Request.CreateResponse(HttpStatusCode.NotFound, "Category not found");
                throw new HttpResponseException(response);
            }
            return Request.CreateResponse<CategoryDto>(
                        HttpStatusCode.OK, 
                        _mapper.Map<Category, CategoryDto>(category));
        }

        [HttpGet]
        [Route("getcategoriesbygenre/{genreId}")]
        public HttpResponseMessage GetCategoriesByGenre(string genreId)
        {
            var categories = _categoryRepository.GetCategoriesByGenre(genreId);
            if (categories != null && categories.Any())
            {
                return Request.CreateResponse<IEnumerable<CategoryDto>>(
                            HttpStatusCode.OK, 
                            _mapper.Map<IEnumerable<Category>, IEnumerable<CategoryDto>>(categories));
            }
            throw new HttpResponseException(HttpStatusCode.NotFound);
        }

        protected override void Dispose(bool disposing)
        {
            if (_categoryRepository != null)
                _categoryRepository.Dispose();

            base.Dispose(disposing);
        }
    }
}
