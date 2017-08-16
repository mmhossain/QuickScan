using System.Collections.Generic;

namespace QuickScan.Domain
{
    public class GenreCategory
    {
        public Genre Genre { get; set; }
        public IEnumerable<Category> Categories { get; set; }
    }
}
