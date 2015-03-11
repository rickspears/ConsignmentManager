namespace ConsignmentManager.Data
{
  using System;

  public class JBFModel
  {
    public string Season { get; set; }
    public string Category { get; set; }
    public string Size { get; set; }
    public string Description { get; set; }
    public double Price { get; set; }
    public bool Reduce { get; set; }
    public bool Donate { get; set; }
    public bool Sold { get; set; }
    public int ItemNumber { get; set; }
    public DateTime? SoldDate { get; set; }
    public double? SoldPrice { get; set; }
    public bool Printed { get; set; }
    public DateTime LastUpdated { get; set; }
  }
}