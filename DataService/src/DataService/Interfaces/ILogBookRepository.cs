using DataService.Models;
using System.Collections.Generic;

namespace DataService.Interfaces
{
    public interface ILogBookRepository
    {
        void Add(LogBook value);
        void Delete(int id);
        IEnumerable<LogBook> Get();
        LogBook Get(int id);
        void Update(int id, LogBook value);
    }
}
