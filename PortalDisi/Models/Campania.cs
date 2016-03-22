using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PortalDisi.Models
{
    [Table("CAMPANIAS_CLIENTE")]
    public class Campania
    {
        [Column("ID_CAMP")]
        public int id { get; set; }
        [Column("TITULO_CAMP")]
        public string titulo { get; set; }
        [Column("MENSAJE_CAMP")]
        public string mensaje { get; set; }
        [Column("IMAGEN1")]
        public string imagen { get; set; }
        [Column("TITULO_DET")]
        public string tituloDet { get; set; }
        [Column("INFO_DET")]
        public string infoDet { get; set; }
        [Column("IMAGEN2")]
        public string imagenDet { get; set; }
        [Column("FLG_ACTIVO")]
        public int activo { get; set; }
    }
}