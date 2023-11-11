using MySql.Data.MySqlClient;
using System.Data;

namespace FamousQuoteQuiz.Data
{
    public class DapperContext
    {
        private readonly IConfiguration _configuration;
        private readonly string _connectionString;

        public DapperContext(IConfiguration configuration)
        {
            _configuration = configuration;
            _connectionString = _configuration.GetConnectionString("FamousQuotesQuizMySqlConnectionString");
        }

        public IDbConnection CreateConnection()
            => new MySqlConnection(_connectionString);
    }
}
