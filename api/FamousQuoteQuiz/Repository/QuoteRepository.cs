using Dapper;
using FamousQuoteQuiz.Data;
using FamousQuoteQuiz.Models.Domain;

namespace FamousQuoteQuiz.Repository
{
    public class QuoteRepository : IQuoteRepository
    {
        private readonly DapperContext _dbContext;
        public QuoteRepository(DapperContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<Quote> CreateAsync(Quote quote)
        {
            using (var connection = _dbContext.CreateConnection())
            {
                var sql = "INSERT INTO quotes VALUES (NULL, @text, @authorid); SELECT LAST_INSERT_ID();";
                var lastInsertID = await connection.ExecuteScalarAsync(sql, quote);
                
                //TODO pay attention after around 2 billion records...
                var result = Convert.ToInt32(lastInsertID);
                quote.QuoteId = result;
            }

            return quote;
        }

        public async Task<IEnumerable<Quote>> GetAsync()
        {
            IEnumerable<Quote> quotes;
            using (var connection = _dbContext.CreateConnection())
            {
                var sql = "SELECT * FROM quotes " +
                    "LEFT JOIN authors " +
                    "ON quotes.authorid = authors.authorid;";

                quotes = await connection.QueryAsync<Quote, Author, Quote>(sql, (quote, author) => {
                    quote.Author = author;
                    return quote;
                }, splitOn: "authorid");
            }

            return quotes.ToList();
        }

        public async Task<Quote?> GetByIdAsync(int id)
        {
            Quote quote = null;
            using (var connection = _dbContext.CreateConnection())
            {
                var sql = $"SELECT * FROM quotes " +
                    $"LEFT JOIN authors " +
                    $"ON quotes.authorid = authors.authorid " +
                    $"WHERE quoteid={id};";


                var quotes = await connection.QueryAsync<Quote, Author, Quote>(sql, (quote, author) => {
                    quote.Author = author;
                    return quote;
                }, splitOn: "authorid");

                quote = quotes.FirstOrDefault(x => x.QuoteId == id);
            }

            return quote;
        }

        public async Task<Quote?> UpdateAsync(Quote quote)
        {
            var existing = await GetByIdAsync(quote.QuoteId);
            if (existing != null)
            {
                using (var connection = _dbContext.CreateConnection())
                {
                    var sql = "UPDATE quotes SET " +
                    "text = @text, " +
                    "authorid = @authorid " +
                    $"WHERE quoteid = {quote.QuoteId}";

                    var rowsAffected = await connection.ExecuteAsync(sql, quote);
                    return quote;
                }
            }

            return null;
        }

        public async Task<Quote?> DeleteAsync(int id)
        {
            var existing = await GetByIdAsync(id);
            if (existing != null)
            {
                var sql = $"DELETE FROM quotes WHERE quoteid = {id}";
                using (var connection = _dbContext.CreateConnection())
                {
                    var rowsAffected = await connection.ExecuteAsync(sql);
                    return existing;
                }
            }

            return null;
        }
    }
}
