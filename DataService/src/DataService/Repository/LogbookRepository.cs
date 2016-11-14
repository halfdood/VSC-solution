using DataService.Interfaces;
using DataService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataService.Repository
{
    public class LogbookRepository : ILogBookRepository
    {
        private DataContext _context;

        public DbSet<LogBook> Logs { get { return _context.Set<LogBook>(); } }

        public LogbookRepository(DataContext context)
        {
            _context = context;
        }

        void ILogBookRepository.Add(LogBook value)
        {
            Logs.Add(value);
        }

        void ILogBookRepository.Delete(int id)
        {
            Logs.Remove(new LogBook { ID = id });
        }

        IEnumerable<LogBook> ILogBookRepository.Get()
        {
            return Logs.ToList();
        }

        LogBook ILogBookRepository.Get(int id)
        {
            return get(id);
        }

        void ILogBookRepository.Update(int id, LogBook value)
        {
            var entity = get(id);
            entity.DriverName = value.DriverName;
        }

        private LogBook get(int id)
        {
            return Logs.SingleOrDefault(l => l.ID == id);
        }
    }
}
