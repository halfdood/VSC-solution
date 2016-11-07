using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using DataService.Models;
using Microsoft.AspNetCore.Cors;

namespace DataService.Controllers
{
    [Route("api/[controller]")]
    public class LogController : Controller
    {
        private DataContext _context;
        public LogController(DataContext context)
        {
            _context = context;
        }

        // GET api/log
        [HttpGet]
        public IEnumerable<DriverLog> Get()
        {
            return _context.Set<DriverLog>().ToList();
        }

        // GET api/log/5
        [HttpGet("{id}")]
        public DriverLog Get(int id)
        {
            return _context.Set<DriverLog>().SingleOrDefault(l => l.ID == id);
        }

        // POST api/log
        [HttpPost]
        public void Post([FromBody]DriverLog value)
        {
            _context.Add(value);
            _context.SaveChanges();
        }

        // PUT api/log/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]DriverLog value)
        {
            var entity = _context.Set<DriverLog>().SingleOrDefault(l => l.ID == id);

            if (entity == null)
                return;

            entity.Lat = value.Lat;
            entity.Long = value.Long;

            _context.SaveChanges();
        }

        // DELETE api/log/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _context.Remove(new DriverLog { ID = id });
            _context.SaveChanges();
        }
    }
}
