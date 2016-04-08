using System;
using System.Net;
using System.Net.Mail;
using System.Net.Mime;
using System.Threading;
using System.ComponentModel;

namespace DisiChat.LCSK
{
    public class MailDisiChat
    {
        public void send(string fromMail, string mensaje)
        {
            var mail = new MailMessage();

            //mail.From = new MailAddress("nelly.juarez@disioperaciones.com");
            mail.From = new MailAddress("luis.gc06@gmail.com");
            
            mail.To.Add("luis.gonzalez@arkingsoft.com");//Fijo DISI
            //mail.To.Add("disi@disioperaciones.com");//Fijo DISI
            mail.To.Add(fromMail);

            mail.Subject = "DiSí Chat - Contacto Desconectado";
            mail.IsBodyHtml = true;
            mail.Body = "Recibió un contacto sin conexión desde el chat DiSí.\r\n\r\n" + mensaje;

            SmtpClient SmtpServer = new SmtpClient("smtp.gmail.com");
            SmtpServer.Port = 587;
            SmtpServer.Credentials = new System.Net.NetworkCredential("luis.gc06@gmail.com", "gonzalez7U");

            //SmtpClient SmtpServer = new SmtpClient("mail.disioperaciones.com");
            //SmtpServer.Port = 26;
            //SmtpServer.Credentials = new System.Net.NetworkCredential("nelly.juarez@disioperaciones.com", "3219386straw");

            SmtpServer.UseDefaultCredentials = false;
            SmtpServer.EnableSsl = true;
            SmtpServer.Send(mail);
            Console.WriteLine("Envio mail.");
        }
    }
}