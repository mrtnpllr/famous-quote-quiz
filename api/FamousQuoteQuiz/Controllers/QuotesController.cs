using FamousQuoteQuiz.Models.Domain;
using FamousQuoteQuiz.Repository;
using Microsoft.AspNetCore.Mvc;

namespace FamousQuoteQuiz.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuotesController : ControllerBase
    {
        private readonly IQuoteRepository _quoteRepository;

        public QuotesController(IQuoteRepository quoteRepository)
        {
            _quoteRepository = quoteRepository;
        }

        [HttpPost]
        public async Task<IActionResult> CreateQuote([FromBody] Quote request)
        {
            if (request == null)
            {
                return BadRequest();
            }

            try
            {
                await _quoteRepository.CreateAsync(request);

            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }

            return Ok(request);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllQuotes()
        {
            try
            {
                var response = await _quoteRepository.GetAsync();
                return Ok(response.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetQuoteById([FromRoute] int id)
        {
            var response = await _quoteRepository.GetByIdAsync(id);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }

        [HttpPut]
        [Route("{id:int}")]

        public async Task<IActionResult> UpdateQuote([FromBody] Quote request)
        {
            var response = await _quoteRepository.UpdateAsync(request);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeleteQuote([FromRoute] int id)
        {
            var response = await _quoteRepository.DeleteAsync(id);

            if (response == null)
            {
                return NotFound();
            }

            return Ok(response);
        }
    }
}
