using System;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController: BaseApiController    
{
  [HttpGet("not-found")]                            // Error 404  Not Found
  public IActionResult GetNotFound()
  {
    return NotFound();
  }

  [HttpGet("bad-request")]                         // Error 400 bad request
  public IActionResult GetBadRequest()
  {
    return BadRequest("This is not a good request");
  }

  [HttpGet("unauthorized")]                         // Error 401 unauthorized
  public IActionResult GetUnauthorised()
  {
    return Unauthorized();
  }

  [HttpGet("validation-error")]                     //  400 Bad request
  public IActionResult GetValidationError()
  {
    ModelState.AddModelError("Problem1", "This is the first error");
    ModelState.AddModelError("Problem2", "This is the second error");
    return ValidationProblem();
  }

  [HttpGet("server-error")]                        // 500 Internal Server error
  public IActionResult GetServerError()
  {
    throw new Exception("This is a server error");
  }

}
