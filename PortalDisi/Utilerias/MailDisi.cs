﻿using System;
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
            var mail = new MailMessage();

            //mail.From = new MailAddress("nelly.juarez@disioperaciones.com");
            mail.From = new MailAddress("luis.gc06@gmail.com");
            
            mail.To.Add("luis.gonzalez@arkingsoft.com");//Fijo DISI
            //mail.To.Add("disi@disioperaciones.com");//Fijo DISI
            mail.To.Add(form.correo);

            mail.Subject = "Información de Factoraje DiSí " + form.nombre;
            mail.IsBodyHtml = true;
            string htmlBody;
            htmlBody = "\n EMPRESA:" + form.empresa;
            htmlBody += "\n OCUPACION:" + form.ocupacion;
            htmlBody += "\n NOMBRE DE CONTACTO:" + form.nombre;
            htmlBody += "\n TELEFONO FIJO:" + form.tel;
            htmlBody += "\n TELEFONO CELULAR:" + form.celular;
            htmlBody += "\n \n" + form.comentarios;
            mail.Body = htmlBody;


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