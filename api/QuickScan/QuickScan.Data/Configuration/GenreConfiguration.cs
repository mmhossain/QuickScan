using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using QuickScan.Domain;

namespace QuickScan.Data.Configuration
{
    public class GenreConfiguration: EntityTypeConfiguration<Genre>
    {
        public GenreConfiguration()
        {
            HasKey(p => p.GenreId);

            Property(p => p.GenreId)
                .HasColumnName("genre_id")
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(p => p.Title).HasColumnName("title");
            Property(p => p.Priority).HasColumnName("priority");

            Property(p => p.RowVersion)
                .HasColumnName("row_version")
                .IsRowVersion();
        }
    }
}
