using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
  [Route("api/[controller]")]  //https://localhost:5001/api/products
  [ApiController]
  public class ProductsController(StoreContext context) : ControllerBase
  {
    private readonly StoreContext context = context;

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts()
    {
      return await context.Products.ToListAsync();
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
      var product = context.Products.Find(id);

      return product == null ? NotFound() : Ok(product);
    }
  }
}


