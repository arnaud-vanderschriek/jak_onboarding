using System;
using API.Entities;

namespace API.Extensions;

public static class ProductExtensions
{
    public static IQueryable<Product> Sort(this IQueryable<Product> query, string? orderBy)
    {

        query = orderBy switch                          // On définit un switch pour qu'on puisse choisir de Sort soit price soit priceDesc ou si pas de paramètre
        {                                               // par nom...
            "price" => query.OrderBy(x => x.Price),
            "priceDesc" => query.OrderByDescending(x => x.Price),
            _ => query.OrderBy(x => x.Name)
        };


        return query;
    }


    public static IQueryable<Product> Search(this IQueryable<Product> query, string searchTerm)
    {
        if (string.IsNullOrEmpty(searchTerm)) return query;

        var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

        return query.Where(x => x.Name.ToLower().Contains(lowerCaseSearchTerm));
    }
}
