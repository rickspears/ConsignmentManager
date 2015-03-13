namespace ConsignmentManager.Data
{
  using SampleData;
  using System.Data.Entity;

    public class CMContext : DbContext 
    {
        public CMContext() : base ("DefaultConnection") {
            this.Configuration.LazyLoadingEnabled = false;
            this.Configuration.ProxyCreationEnabled = false;

            Database.SetInitializer(new MigrateDatabaseToLatestVersion<CMContext, DbInitializer>());
        }

        public DbSet<JBFModel> JBFModels { get; set; }

    }
}
