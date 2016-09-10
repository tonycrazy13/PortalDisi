using PortalDisi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PortalDisi.Controllers
{
    public class HomeController : Controller
    {
        private DisiContext db = new DisiContext();

        public ActionResult Index()
        {
            //var list = db.Campanias.Where(c => c.activo == 1).ToList();
            var list = new List<Campania>();
            return View(list);
        }
        public ActionResult Nosotros()
        {
            //var list = db.Campanias.Where(c => c.activo == 1).ToList();

            return View();
        }
        public ActionResult Paraque()
        {
            //var list = db.Campanias.Where(c => c.activo == 1).ToList();

            return View();
        }
        public ActionResult Cuestionario()
        {
            //var list = db.Campanias.Where(c => c.activo == 1).ToList();

            return View();
        }
        public ActionResult Contacto()
        {
            //var list = db.Campanias.Where(c => c.activo == 1).ToList();

            return View();
        }
    }
}
