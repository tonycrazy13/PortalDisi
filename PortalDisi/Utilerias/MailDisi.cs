using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;
using System.ComponentModel;
using PortalDisi.Models;

namespace PortalDisi.Utilerias
{
    public class MailDisi
    {
        public void send(Formulario form)
        {

            MailMessage mmsg = new MailMessage();
            mmsg.To.Add("disi@disioperaciones.com");//Fijo DISI
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
            //mmsg.From = new MailAddress("disi@disioperaciones.com");
            mmsg.From = new MailAddress("luis.gc06@gmail.com");
            SmtpClient cliente = new SmtpClient
            {
                //Credentials = new NetworkCredential("disi@disioperaciones.com", "oVc&a630"),
                //Port = 26,
                //EnableSsl = true,
                //Host = "mail.disioperaciones.com"
                Credentials = new NetworkCredential("luis.gc06@gmail.com", "gonzalez7U"),
                Port = 25,
                EnableSsl = true,
                Host = "smtp.gmail.com"
            };
            cliente.Send(mmsg);
            Console.WriteLine("Envio mail.");
        }
    }
}