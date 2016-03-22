using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PortalDisi.Models
{
    [Table("CAT_SUCURSALES")]
    public class Sucursal
    {
        [Key]
        [Column("ID_SUCURSAL")]
        public int id { get; set; }
        [Column("TITULO_SUCURSAL")]
        public string titulo { get; set; }
        [Column("SUBTITULO_SUCURSAL")]
        public string subtitulo { get; set; }
        [Column("DES_MARCACION")]
        public string marcacion { get; set; }
        [Column("TEL1")]
        public string tel1 { get; set; }
        [Column("TEL2")]
        public string tel2 { get; set; }
        [Column("TEL3")]
        public string tel3 { get; set; }
        [Column("FLG_ACTIVO")]
        public int activo { get; set; }
    }
}