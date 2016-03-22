using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;
using System.ComponentModel;

namespace PortalDisi.Utilerias
{
    public class MailDisi
    {
        public void send(String email,String nombreContacto, String mensaje)
        {
            SmtpClient SmtpServer = new SmtpClient("mail.disioperaciones.com");
            var mail = new MailMessage();
            mail.From = new MailAddress("nelly.juarez@disioperaciones.com");
            //mail.To.Add("luis.gonzalez@arkingsoft.com");//Fijo DISI
            mail.To.Add("disi@disioperaciones.com");//Fijo DISI
            mail.To.Add(email);
            mail.Subject = "Información de Factoraje DiSí " + nombreContacto;
            mail.IsBodyHtml = true;
            string htmlBody;
            htmlBody = mensaje;
            mail.Body = htmlBody;
            SmtpServer.Port = 26;
            SmtpServer.UseDefaultCredentials = false;
            SmtpServer.Credentials = new System.Net.NetworkCredential("nelly.juarez@disioperaciones.com", "3219386straw");
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);
            Console.WriteLine("Envio mail.");
        }
    }
}