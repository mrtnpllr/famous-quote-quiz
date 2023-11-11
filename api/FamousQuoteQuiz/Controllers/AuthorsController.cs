using FamousQuoteQuiz.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FamousQuoteQuiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthorsController : ControllerBase
    {
        private readonly IAuthorRepository _authorRepository;

        public AuthorsController(IAuthorRepository authorRepository)
        {
            _authorRepository = authorRepository;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAuthors()
        {
            try
            {
                var response = await _authorRepository.GetAsync();
                return Ok(response.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
