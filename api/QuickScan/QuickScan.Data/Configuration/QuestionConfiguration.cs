using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using QuickScan.Domain;

namespace QuickScan.Data.Configuration
{
    public class QuestionConfiguration: EntityTypeConfiguration<Question>
    {
        public QuestionConfiguration()
        {
            HasKey(p => p.QuestionId);

            Property(p => p.QuestionId)
                .HasColumnName("question_id")
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(p => p.Title).HasColumnName("title");
            Property(p => p.Type).HasColumnName("type");
            Property(p => p.Level).HasColumnName("question_level");
            Property(p => p.CategoryId).HasColumnName("category_id");

            HasRequired(p => p.Category);

            HasMany(p => p.Options)
                .WithRequired(p => p.Question);

            Property(p => p.RowVersion)
                .HasColumnName("row_version")
                .IsRowVersion();
        }
    }
}
