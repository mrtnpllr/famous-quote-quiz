namespace FamousQuoteQuiz.Models.Domain
{
    public class Quote
    {
        public int QuoteId { get; set; }
        public string Text { get; set; }
        public int? AuthorId { get; set; }
        public Author? Author { get; set; }
    }
}
