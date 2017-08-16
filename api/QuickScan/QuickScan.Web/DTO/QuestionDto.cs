using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QuickScan.Web.DTO
{
    public class QuestionDto
    {
        public string QuestionId { get; set; }
        public string Title { get; set; }
        public int Level { get; set; }
        public int Type { get; set; }
        public byte[] RowVersion { get; set; }

        public string CategoryId { get; set; }
        public List<OptionDto> Options { get; set; }
    }
}