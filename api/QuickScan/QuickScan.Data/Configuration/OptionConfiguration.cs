using QuickScan.Domain;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace QuickScan.Data.Configuration
{
    public class OptionConfiguration: EntityTypeConfiguration<Option>
    {
        public OptionConfiguration()
        {
            HasKey(p => p.OptionId);

            Property(p => p.OptionId)
                .HasColumnName("option_id")
                .HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);

            Property(p => p.Text).HasColumnName("text");
            Property(p => p.QuestionId).HasColumnName("question_id");

            HasRequired(p => p.Question);

            Property(p => p.RowVersion)
                .HasColumnName("row_version")
                .IsRowVersion();
        }
    }
}
