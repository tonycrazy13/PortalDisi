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

            MailMessage mmsg = new MailMessage();
            mmsg.To.Add("disi@disioperaciones.com");//Fijo DISI
            mmsg.To.Add(fromMail);
            //Asunto
            mmsg.Subject = "DiSí Chat - Contacto Desconectado";
            mmsg.IsBodyHtml = true;
            mmsg.Body = "Recibió un contacto sin conexión desde el chat DiSí.\r\n\r\n" + mensaje;

            mmsg.IsBodyHtml = false;
            mmsg.From = new MailAddress("disi@disioperaciones.com");
            SmtpClient cliente = new SmtpClient
            {
                Credentials = new NetworkCredential("disi@disioperaciones.com", "oVc&a630"),
                Port = 26,
                EnableSsl = true,
                Host = "mail.disioperaciones.com"
            };
            cliente.Send(mmsg);
            Console.WriteLine("Envio mail.");
        }
    }
}