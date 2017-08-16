using System;
using System.Collections.Generic;
using System.Linq;
using QuickScan.Domain;

namespace QuickScan.Data.Repository
{
    public class QuestionRepository : IQuestionRepository
    {
        private readonly IContext _context = null;

        public QuestionRepository(IContext context)
        {
            _context = context;
        }

        public IEnumerable<Question> GetAllQuestions()
        {
            return _context.Questions?.ToList();
        }

        public IEnumerable<Question> GetQuestionsByCategory(string categoryId)
        {
            return _context.Questions.Where(c => c.CategoryId == categoryId)?.ToList();
        }

        public IEnumerable<Question> GetQuestionsByGenre(string genreId)
        {
            throw new NotImplementedException();
        }

        public Question GetQuesionById(string id)
        {
            return _context.Questions.FirstOrDefault(c => c.QuestionId == id);
        }

        private bool disposed = false;
        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    if (_context != null)
                        ((IDisposable)_context).Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }        
    }
}
