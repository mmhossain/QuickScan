namespace QuickScan.Domain
{
    public class Option
    {
        public string OptionId { get; set; }
        public string Text { get; set; }
        public byte[] RowVersion { get; set; }

        public string QuestionId { get; set; }
        public Question Question { get; set; }
    }
}
