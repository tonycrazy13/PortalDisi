using PortalDisi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PortalDisi.Controllers
{
    public class CampaniasController : ApiController
    {
        private DisiContext db = new DisiContext();

        // GET api/<controller>
        public List<Campania> Get()
        {
            var list = db.Campanias.Where(c => c.activo == 1).ToList();
            return list;
        }

        // GET api/<controller>/5
        public Campania Get(int id)
        {
            return db.Campanias.Where(c => c.id == id).First();
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