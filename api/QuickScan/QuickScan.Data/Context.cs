using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using QuickScan.Data.Configuration;
using QuickScan.Domain;

namespace QuickScan.Data
{
    public class Context: DbContext, IContext
    {
        public Context(): base("QuickScanDbConnection") { }

        public IDbSet<Genre> Genres { get; set; }
        public IDbSet<Category> Categories { get; set; }
        public IDbSet<Question> Questions { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations
                .Add(new GenreConfiguration())
                .Add(new CategoryConfiguration())
                .Add(new QuestionConfiguration())
                .Add(new OptionConfiguration());
        }
    }
}
