using FamousQuoteQuiz.Models.Domain;

namespace FamousQuoteQuiz.Repository
{
    public interface IAuthorRepository
    {
        public Task<Author> CreateAsync(Author author);
        public Task<IEnumerable<Author>> GetAsync();
        public Task<Author?> GetByIdAsync(int id);
        public Task<Author?> UpdateAsync(Author author);
        public Task<Author?> DeleteAsync(int id);
    }
}
