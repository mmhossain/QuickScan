namespace QuickScan.Web.DTO
{
    public class GenreDto
    {
        public string GenreId { get; set; }
        public string Title { get; set; }
        public int Priority { get; set; }
        public byte[] RowVersion { get; set; }
    }
}