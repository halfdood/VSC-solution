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
            _context.SaveChanges();
        }

        void ILogBookRepository.Delete(int id)
        {
            Logs.Remove(new LogBook { ID = id });
            _context.SaveChanges();
        }

        IEnumerable<LogBook> ILogBookRepository.Get()
        {
            return Logs.ToList();
        }

        LogBook ILogBookRepository.Get(int id)
        {
            return get(id);
        }

        List<Point> ILogBookRepository.GetPoints()
        {
            return Logs.Select(l => new Point
            {
                Latitude = l.Lat,
                Longitude = l.Long
            }).ToList();
        }

        void ILogBookRepository.Update(int id, LogBook value)
        {
            var entity = get(id);
            entity.CustomerName = value.CustomerName;
            entity.DepotName = value.DepotName;
            entity.DriverName = value.DriverName;
            entity.DriverReference = value.DriverReference;
            entity.Lat = value.Lat;
            entity.Long = value.Long;
            entity.LocationName = value.LocationName;
            entity.RouteName = value.RouteName;
            entity.SequenceNo = value.SequenceNo;
            _context.SaveChanges();
        }

        private LogBook get(int id)
        {
            return Logs.SingleOrDefault(l => l.ID == id);
        }
    }
}
