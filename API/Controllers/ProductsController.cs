using System;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
  [Route("api/[controller]")]  //https://localhost:5001/api/products
  [ApiController]
  public class ProductsController(StoreContext context) : ControllerBase
  {
    private readonly StoreContext context = context;

    [HttpGet]
    public ActionResult<List<Product>> GetProducts()
    {
      return context.Products.ToList();
    }

    [HttpGet("{id}")]
    public ActionResult<Product> GetProduct(int id)
    {
      var product = context.Products.Find(id);

      return product == null ? NotFound() : Ok(product);
    }
  }
}


