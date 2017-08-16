using System;
using System.Collections.Generic;
using System.Linq;
using QuickScan.Domain;

namespace QuickScan.Data.Repository
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly IContext _context = null;

        public CategoryRepository(IContext context)
        {
            _context = context;
        }

        public IEnumerable<Genre> GetAllGenres()
        {
            return _context.Genres?.ToList();
        }

        public IEnumerable<Category> GetAllCategories()
        {
            return _context.Categories?.ToList();
        }

        public Category GetCategoryById(string id)
        {
            return _context.Categories.FirstOrDefault(c => c.CategoryId == id);
        }

        public IEnumerable<Category> GetCategoriesByGenre(string genreId)
        {
            return _context.Categories.Where(c => c.GenreId == genreId)?.ToList();
        }

        public IEnumerable<GenreCategory> GetAllGenresWithCategories()
        {
            var genreCategory = from c in _context.Categories
                                group c by c.Genre into gc
                                select new GenreCategory { Genre = gc.Key, Categories = gc };

            return genreCategory.ToList();
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
