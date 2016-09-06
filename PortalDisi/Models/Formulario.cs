using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PortalDisi.Models
{
    [Table("DATOS_FORMULARIO")]
    public class Formulario
    {
        [Column("ID_FORMULARIO")]
        public int id { get; set; }
        [Column("NOMBRE_EMPRESA")]
        public string empresa { get; set; }
        [Column("DES_OCUPACION")]
        public string ocupacion { get; set; }
        [Column("NOMBRE_CONTACTO")]
        public string nombre { get; set; }
        [Column("CORREO")]
        public string correo { get; set; }
        [Column("TEL")]
        public string tel { get; set; }
        [Column("CELULAR")]
        public string celular { get; set; }
        [Column("ID_ESTADO_FORM")]
        public int idEstado { get; set; }
        [Column("COMENTARIOS")]
        public string comentarios { get; set; }
        [Column("FEC_COMENTARIOS")]
        public DateTime fechaComentario { get; set; }
    }
}