namespace QuickScan.Domain
{
    public class Category
    {
        public string CategoryId { get; set; }
        public string Title { get; set; }
        public int Priority { get; set; }
        public byte[] RowVersion { get; set; }

        public string GenreId { get; set; }
        public virtual Genre Genre { get; set; }
    }
}
