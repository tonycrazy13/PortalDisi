using PortalDisi.Models;
using PortalDisi.Utilerias;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;

namespace PortalDisi.Controllers
{
    public class FormularioController : ApiController
    {
        private DisiContext db = new DisiContext();

        // GET api/<controller>
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<controller>/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<controller>
        public string Post([FromBody]Formulario form)
        {
            try
            {
                if (form.empresa == null)
                {
                    throw new Exception("Es necesario indicar Empresa");
                }
                if (form.ocupacion == null)
                {
                    throw new Exception("Es necesario indicar Ocupación");
                }
                if (form.nombre == null)
                {
                    throw new Exception("Es necesario indicar Nombre");
                }
                if (form.correo== null)
                {
                    throw new Exception("Es necesario indicar Correo");
                }
                if (form.tel == null)
                {
                    throw new Exception("Es necesario indicar Teléfono Fijo");
                }
                if (form.celular == null)
                {
                    throw new Exception("Es necesario indicar Teléfono Celular");
                }
                if (form.comentarios == null)
                {
                    throw new Exception("Es necesario indicar Comentario");
                }
            }
            catch (Exception e)
            {
                e.GetBaseException();
                return e.Message ;
            }
            MailDisi mail = new MailDisi(); 
            mail.send(form);

            int sequence = db.Database.SqlQuery<int>("SELECT SYSTEM.SEC_ID_FORMULARIO.NEXTVAL FROM DUAL").FirstOrDefault();
            db.Formularios.Add(form);
            form.id = sequence;
            form.fechaComentario = DateTime.Now;
            form.idEstado = 1;
            db.SaveChanges();

            return "OK";
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