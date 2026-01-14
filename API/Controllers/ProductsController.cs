using System;
using API.Data;
using API.Entities;
using API.Extensions;
using API.RequestHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.ObjectPool;

namespace API.Controllers
{

  public class ProductsController(StoreContext context) : BaseApiController
  {

    [HttpGet]
    public async Task<ActionResult<List<Product>>> GetProducts([FromQuery] ProductParams productParams)
    {
      var query = context.Products
      .Sort(productParams.OrderBy)
      .Search(productParams.SearchTerm)
      .SearchByBrandOrTypes(productParams.Brands, productParams.Types)
      .AsQueryable();


      var products = await PagedList<Product>.ToPagedList(query, productParams.PageNumber, productParams.PageSize);

      Response.AddPaginationHeader(products.Metadata);

      return products;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Product>> GetProduct(int id)
    {
      var product = await context.Products.FindAsync(id);

      return product == null ? NotFound() : Ok(product);
    }

    [HttpGet("filters")]
    public async Task<IActionResult> GetFilters()
    {
      var brands = await context.Products.Select(x => x.Brand).Distinct().ToListAsync(); //Recupérer les marques et les types avec LinQ
      var types = await context.Products.Select(x => x.Type).Distinct().ToListAsync();

      return Ok(new { brands, types });                                                  // Les renvoyer sous formes d'objets...
    }
  }
}


