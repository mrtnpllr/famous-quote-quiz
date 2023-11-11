using Dapper;
using FamousQuoteQuiz.Data;
using FamousQuoteQuiz.Models.Domain;

namespace FamousQuoteQuiz.Repository
{
    public class AuthorRepository : IAuthorRepository
    {
        private readonly DapperContext _dbContext;
        public AuthorRepository(DapperContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Author> CreateAsync(Author author)
        {
            throw new NotImplementedException();
        }

        public async Task<Author?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Author>> GetAsync()
        {
            IEnumerable<Author> authors;
            using (var connection = _dbContext.CreateConnection())
            {
                var sql = "SELECT * FROM authors;";
                authors = await connection.QueryAsync<Author>(sql);
           
                return authors.ToList();
            }
        }

        public async Task<Author?> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<Author?> UpdateAsync(Author author)
        {
            throw new NotImplementedException();
        }
    }
}
