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
                    Description = "BEAT THE DRUM", 
                    Price = 1.50, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 45785723, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/5/2014 5:51:54") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter",
                    Category = "Puzzles",
                    Size = null,
                    Description = "OCEAN DEPTHS FLOOR PUZZLE (COMPLETE)",
                    Price = 4.00,
                    Reduce = true,
                    Donate = false,
                    Sold = true,
                    ItemNumber = 45785722,
                    SoldDate = Convert.ToDateTime("12/6/2014"),
                    SoldPrice = 4.00,
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/5/2014 5:51:54") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter",
                    Category = "Books",
                    Size = null,
                    Description = "BUNNY CLOTH BOOK",
                    Price = 2.5,
                    Reduce = true,
                    Donate = false,
                    Sold = true,
                    ItemNumber = 45784351,
                    SoldDate = Convert.ToDateTime("12/7/2014"),
                    SoldPrice = 1.25,
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/5/2014 5:51:54") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter",
                    Category = "Puzzles",
                    Size = null,
                    Description = "101 MISTAKES PUZZLE (COMPLETE)",
                    Price = 4,
                    Reduce = true,
                    Donate = true,
                    Sold = false,
                    ItemNumber = 45782161,
                    SoldDate = null,
                    SoldPrice = null,
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/4/2014 10:13:02") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "SET OF 2 VINYL BOOKS: CLANCY/ SQUEAKY CLEAN ELMO", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 45772914, 
                    SoldDate = Convert.ToDateTime("12/7/2014"), 
                    SoldPrice = 1.50, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 23:10") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "GOOD NIGHT ELMO CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 45772913, 
                    SoldDate = Convert.ToDateTime("12/6/2014"), 
                    SoldPrice = 3.00, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "PRINCESS CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 45772912, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "PRINCESS CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 45772911, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "NIGHT NIGHT PETER RABBIT CLOTH BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 45772910, 
                    SoldDate = Convert.ToDateTime("12/6/2014"),
                    SoldPrice = 3.00, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 11:10:43") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "MY FIRST BUSY BOOK", 
                    Price = 3.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = true,
                    ItemNumber = 45772281, 
                    SoldDate = Convert.ToDateTime("12/7/2014"), 
                    SoldPrice = 1.50, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 8:33:01") });
              context.JBFModels.Add(
                  new JBFModel {
                    Season = "Fall/Winter", 
                    Category = "Books", 
                    Size = null, 
                    Description = "MY BABY CLOTH BOOK", 
                    Price = 4.00, 
                    Reduce = true, 
                    Donate = false, 
                    Sold = false,
                    ItemNumber = 45772280, 
                    SoldDate = null, 
                    SoldPrice = null, 
                    Printed = true,
                    LastUpdated = Convert.ToDateTime("12/2/2014 8:33:01") });

                context.SaveChanges();
            }
        }
    }
}
