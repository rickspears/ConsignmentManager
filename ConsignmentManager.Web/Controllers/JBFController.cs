using ConsignmentManager.DAL;
using ConsignmentManager.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Runtime.Remoting.Contexts;
using System.Web.Http;

namespace ConsignmentManager.Web.Controllers
{
    public class JBFController : ApiController
    {
      #region Fields
      private IRepository repository;
      #endregion

      #region Controllers
      public JBFController() : this(new Repository(new CMContext())) { }

      public JBFController(IRepository repository)
      {
        this.repository = repository;
      }
      #endregion

      #region Routes
      // GET: api/analytics
      [Route("api/analytics")]
      public HttpResponseMessage Get()
      {
        var items = repository.GetItems();
        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, items);
        return response;
      }

      [Route("api/analytics/add")]
      public HttpResponseMessage PostAdd([FromBody] IEnumerable<JBFModel> items)
      {
        repository.AddItems(items);
        repository.Save();
        return Request.CreateResponse(HttpStatusCode.OK, "New Items Saved");
      }

      [Route("api/analytics/update")]
      public HttpResponseMessage PostUpdate([FromBody] IEnumerable<JBFModel> items)
      {
        repository.UpdateItems(items);
        repository.Save();
        return Request.CreateResponse(HttpStatusCode.OK, "Existing Items Updated");
      }
      #endregion
    }
}
