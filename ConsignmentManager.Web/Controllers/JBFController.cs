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
      private IRepository repository;

      public JBFController() : this(new Repository(new CMContext())) { }

      public JBFController(IRepository repository)
      {
        this.repository = repository;
      }

      // GET: api/analytics
      [Route("api/analytics")]
      public HttpResponseMessage Get()
      {
        var items = repository.GetItems();
        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, items);
        return response;
      }
    }
}
