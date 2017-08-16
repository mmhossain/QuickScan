using QuickScan.Domain;
using System.Data.Entity;

namespace QuickScan.Data
{
    public interface IContext
    {
        IDbSet<Genre> Genres { get; set; }
        IDbSet<Category> Categories { get; set; }
        IDbSet<Question> Questions { get; set; }
    }
}
