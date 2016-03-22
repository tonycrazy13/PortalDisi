using PortalDisi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PortalDisi.Controllers
{
    public class SucursalesController : ApiController
    {
        private DisiContext db = new DisiContext();

        // GET api/sucursales
        public IEnumerable<Sucursal> Get()
        {
            return db.Sucursales.Where(s => s.activo == 1).ToList();
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public void Post([FromBody]string value)
        {
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }
    }
}