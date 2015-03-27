namespace ConsignmentManager.Data.SampleData
{
    using System;
    using System.Collections.Generic;
    using System.Data.Entity.Migrations;
    using System.Linq;

    public class DbInitializer : DbMigrationsConfiguration<CMContext>
    {
        public DbInitializer()
        {
            this.AutomaticMigrationDataLossAllowed = true;
            this.AutomaticMigrationsEnabled = true;
        }
        protected override void Seed(CMContext context)
        {
            base.Seed(context);
            if (context.JBFModels.Count() == 0)
            {
              context.JBFModels.Add(
                  new JBFModel { 
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    ItemDescription = "BEAT THE DRUM", 
                    Price = 1.50, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 1, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/5/2014 5:51:54") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter",
                    Category = "Puzzles",
                    Size = null,
                    ItemDescription = "OCEAN DEPTHS FLOOR PUZZLE (COMPLETE)",
                    Price = 4.00,
                    Reduce = true,
                    Donate = false,
                    Sold = true,
                    ItemNumber = 2,
                    SoldDate = Convert.ToDateTime("12/6/2014"),
                    SoldPrice = 4.00,
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/5/2014 5:51:54") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter",
                    Category = "Books",
                    Size = null,
                    ItemDescription = "BUNNY CLOTH BOOK",
                    Price = 2.5,
                    Reduce = true,
                    Donate = false,
                    Sold = true,
                    ItemNumber = 3,
                    SoldDate = Convert.ToDateTime("12/7/2014"),
                    SoldPrice = 1.25,
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/5/2014 5:51:54") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter",
                    Category = "Puzzles",
                    Size = null,
                    ItemDescription = "101 MISTAKES PUZZLE (COMPLETE)",
                    Price = 4,
                    Reduce = true,
                    Donate = true,
                    Sold = false,
                    ItemNumber = 4,
                    SoldDate = null,
                    SoldPrice = null,
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/4/2014 10:13:02") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "SET OF 2 VINYL BOOKS: CLANCY/ SQUEAKY CLEAN ELMO", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 5, 
                    SoldDate = Convert.ToDateTime("12/7/2014"), 
                    SoldPrice = 1.50, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 23:10") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "GOOD NIGHT ELMO CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 6, 
                    SoldDate = Convert.ToDateTime("12/6/2014"), 
                    SoldPrice = 3.00, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "PRINCESS CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 7, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "PRINCESS CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 8, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "NIGHT NIGHT PETER RABBIT CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 9, 
                    SoldDate = Convert.ToDateTime("12/6/2014"),
                    SoldPrice = 3.00, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "MY FIRST BUSY BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 10, 
                    SoldDate = Convert.ToDateTime("12/7/2014"), 
                    SoldPrice = 1.50, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 8:33:01") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null,
                    ItemDescription = "MY BABY CLOTH BOOK", 
                    Price = 4.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 11, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 8:33:01") });

                context.SaveChanges();
            }
        }
    }
}
