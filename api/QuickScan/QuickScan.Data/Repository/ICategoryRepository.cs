using QuickScan.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace QuickScan.Data.Repository
{
    public interface ICategoryRepository: IDisposable
    {
        IEnumerable<Genre> GetAllGenres();
        IEnumerable<Category> GetAllCategories();
        IEnumerable<Category> GetCategoriesByGenre(string genreId);
        IEnumerable<GenreCategory> GetAllGenresWithCategories();
        Category GetCategoryById(string id);
    }
}
