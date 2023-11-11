using FamousQuoteQuiz.Models.Domain;

namespace FamousQuoteQuiz.Repository
{
    public interface IQuoteRepository
    {
        public Task<Quote> CreateAsync(Quote quote);
        public Task<IEnumerable<Quote>> GetAsync();
        public Task<Quote?> GetByIdAsync(int id);
        public Task<Quote?> UpdateAsync(Quote quote);
        public Task<Quote?> DeleteAsync(int id);
    }
}
