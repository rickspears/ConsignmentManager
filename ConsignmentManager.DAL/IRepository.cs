using ConsignmentManager.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsignmentManager.DAL
{
  public interface IRepository : IDisposable
  {
    IEnumerable<JBFModel> GetItems();
    JBFModel GetItem(int id);
    void AddItems(IEnumerable<JBFModel> items);
    void AddItem(JBFModel item);
    void UpdateItems(IEnumerable<JBFModel> items);
    void UpdateItem(JBFModel item);
    void DeleteItems(IEnumerable<JBFModel> items);
    void DeleteItem(JBFModel item);
    void DeleteItem(int id);
  }
}
