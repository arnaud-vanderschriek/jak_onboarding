using System;
using API.DTOs;
using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
{
  public required DbSet<Product> Products { get; set; }
  public required DbSet<Basket> Baskets { get; set; }


  protected override void OnModelCreating(ModelBuilder builder)
  {
    base.OnModelCreating(builder);

    builder.Entity<IdentityRole>()
      .HasData(
        new IdentityRole { Id = "6c9997e0-998a-4b52-b443-ebc319723334", Name = "Member", NormalizedName = "MEMBER" },
        new IdentityRole { Id = "3fa48419-12c9-491e-a358-06f685ab9c31", Name = "Admin", NormalizedName = "ADMIN" }
      );
  }

}
