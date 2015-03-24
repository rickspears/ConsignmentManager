using ConsignmentManager.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsignmentManager.DAL
{
  public class Repository : IRepository, IDisposable
  {
    #region Fields
    private CMContext context;
    #endregion

    #region Constructors
    public Repository(CMContext context)
    {
      this.context = context;
    }
    #endregion

    #region Methods
    public IEnumerable<JBFModel> GetItems()
    {
      return context.JBFModels.ToList();
    }

    public JBFModel GetItem(int id)
    {
      return context.JBFModels.Find(id);
    }

    public void AddItems(IEnumerable<JBFModel> items)
    {
      if (items != null)
        context.JBFModels.AddRange(items);
    }

    public void AddItem(JBFModel item)
    {
      context.JBFModels.Add(item);
    }

    public void UpdateItems(IEnumerable<JBFModel> items)
    {
      foreach (var item in items)
      {
        UpdateItem(item);
      }
    }

    public void UpdateItem(JBFModel item)
    {
      context.Entry(item).State = EntityState.Modified;
    }

    public void DeleteItems(IEnumerable<JBFModel> items)
    {
      context.JBFModels.RemoveRange(items);
    }

    public void DeleteItem(JBFModel item)
    {
      context.JBFModels.Remove(item);
    }

    public void DeleteItem(int id)
    {
      var item = context.JBFModels.Find(id);
      DeleteItem(item);
    }

    public void Save()
    {
      context.SaveChanges();
    }
    #endregion

    #region IDisposable
    private bool disposed = false;
    protected virtual void Dispose(bool disposing)
    {
      if (!this.disposed)
      {
        if (disposing)
        {
          context.Dispose();
        }
        this.disposed = true;
      }
    }

    public void Dispose()
    {
      Dispose(true);
      GC.SuppressFinalize(this);
    }
    #endregion
  }
}