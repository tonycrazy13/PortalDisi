using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;
using System.ComponentModel;
using PortalDisi.Models;
using System.Web.Configuration;

namespace PortalDisi.Utilerias
{
    public class MailDisi
    {
        public void send(Formulario form)
        {

            var correoOrigen = WebConfigurationManager.AppSettings["CorreoOrigen"];
            var contraseñaOrigen = WebConfigurationManager.AppSettings["ContraseñaOrigen"];
            var Puerto = WebConfigurationManager.AppSettings["Puerto"];
            var Host = WebConfigurationManager.AppSettings["Host"];

            MailMessage mmsg = new MailMessage();
            //mmsg.To.Add(Constantes.MAIL_FIJO);//Fijo DISI
            mmsg.To.Add(form.correo);
            //Asunto
            mmsg.Subject = "Información de Factoraje DiSí ";
            mmsg.IsBodyHtml = true;
            string htmlBody;
            htmlBody = "\n EMPRESA:" + form.empresa;
            htmlBody += "\n OCUPACION:" + form.ocupacion;
            htmlBody += "\n NOMBRE DE CONTACTO:" + form.nombre;
            htmlBody += "\n TELEFONO FIJO:" + form.tel;
            htmlBody += "\n TELEFONO CELULAR:" + form.celular;
            htmlBody += "\n \n" + form.comentarios;
            mmsg.Body = htmlBody;

            mmsg.IsBodyHtml = false;
            mmsg.From = new MailAddress(correoOrigen);
            SmtpClient cliente = new SmtpClient
            {
                Credentials = new NetworkCredential(correoOrigen, contraseñaOrigen),
                Port = Convert.ToInt32(Puerto),
                EnableSsl = false,
                Host = Host
            };
            cliente.Send(mmsg);
            Console.WriteLine("Envio mail.");
        }
    }
}