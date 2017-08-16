using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using QuickScan.Domain;

namespace QuickScan.Data.Configuration
{
    public class CategoryConfiguration: EntityTypeConfiguration<Category>
    {
        public CategoryConfiguration()
        {
            HasKey(p => p.CategoryId);

            Property(p => p.CategoryId)
                .HasColumnName("category_id")
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(p => p.Title).HasColumnName("title");
            Property(p => p.Priority).HasColumnName("priority");
            Property(p => p.GenreId).HasColumnName("genre_id");

            HasRequired(p => p.Genre);

            Property(p => p.RowVersion)
                .HasColumnName("row_version")
                .IsRowVersion();
        }
    }
}
