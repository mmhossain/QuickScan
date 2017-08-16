using QuickScan.Domain;
using System;
using System.Collections.Generic;

namespace QuickScan.Data.Repository
{
    public interface IQuestionRepository : IDisposable
    {
        IEnumerable<Question> GetAllQuestions();
        IEnumerable<Question> GetQuestionsByCategory(string categoryId);
        IEnumerable<Question> GetQuestionsByGenre(string genreId);
        Question GetQuesionById(string id);
    }
}
