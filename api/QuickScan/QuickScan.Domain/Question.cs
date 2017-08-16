using System.Collections.Generic;

namespace QuickScan.Domain
{
    public class Question
    {
        public string QuestionId { get; set; }
        public string Title { get; set; }
        public int Level { get; set; }
        public int Type { get; set; }
        public byte[] RowVersion { get; set; }

        public string CategoryId { get; set; }
        
        public Category Category { get; set; }
        public ICollection<Option> Options { get; set; }
    }
}
