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
      private CMContext db = new CMContext();

      // GET: api/analytics
      [Route("api/analytics")]
      public HttpResponseMessage Get()
      {
        var items = db.Items;
        HttpResponseMessage response = Request.CreateResponse(HttpStatusCode.OK, items);
        return response;
      }
    }
}
