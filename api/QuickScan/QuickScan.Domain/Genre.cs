using System.Collections.Generic;

namespace QuickScan.Domain
{
    public class Genre
    {
        public string GenreId { get; set; }
        public string Title { get; set; }
        public int Priority { get; set; }
        public byte[] RowVersion { get; set; }
    }
}
