using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickScan.Web.DTO
{
    public class GenreCategoryDto
    {
        public GenreDto Genre { get; set; }
        public IEnumerable<CategoryDto> Categories { get; set; }
    }
}