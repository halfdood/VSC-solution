using DataService.Interfaces;
using DataService.Models;
using System.Collections.Generic;
using System.Linq;
using System;

namespace DataService.Repository
{
    public class MockLogBookRepository : ILogBookRepository
    {
        private List<LogBook> _data = new List<LogBook>();

        void ILogBookRepository.Add(LogBook value)
        {
            _data.Add(value);
        }

        void ILogBookRepository.Delete(int id)
        {
            var log = get(id);
            _data.Remove(log);
        }

        IEnumerable<LogBook> ILogBookRepository.Get()
        {
            return _data;
        }

        LogBook ILogBookRepository.Get(int id)
        {
            return get(id);
        }

        void ILogBookRepository.Update(int id, LogBook value)
        {
            var log = get(id);
            value.ID = log.ID;
            _data.Remove(log);
            _data.Add(value);
        }

        private LogBook get(int id)
        {
            return _data.SingleOrDefault(l => l.ID == id);
        }

        List<Point> ILogBookRepository.GetPoints()
        {
            return _data.Select(d => new Point
            {
                Latitude = d.Lat,
                Longitude = d.Long
            }).ToList();
        }
    }
}
