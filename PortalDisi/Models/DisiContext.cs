using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations.Schema;

namespace PortalDisi.Models
{
    public class DisiContext : DbContext
    {

        public DisiContext() : base("OracleDisiContext")
        {
            //Coneccion Oracle DisiOperaciones-LGONZALEZ
        }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            //modelBuilder.HasDefaultSchema("SYSTEM");
            modelBuilder.HasDefaultSchema("DISIOPERACIONES");
            modelBuilder.Entity<Formulario>().Property(t => t.id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
            modelBuilder.Entity<Campania>().Property(c => c.id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.None);
        }

        public DbSet<Sucursal> Sucursales { get; set; }
        public DbSet<Formulario> Formularios { get; set; }
        public DbSet<Campania> Campanias { get; set; }
    }
}