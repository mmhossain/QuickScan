using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickScan.Web.DTO
{
    public class CategoryDto
    {
        public string CategoryId { get; set; }
        public string Title { get; set; }
        public int Priority { get; set; }
        public byte[] RowVersion { get; set; }

        public string GenreId { get; set; }
    }
}