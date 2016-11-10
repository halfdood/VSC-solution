using DataService.Interfaces;
using DataService.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DataService.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    public class LogBookController : Controller
    {
        private ILogBookRepository _repo;

        public LogBookController(ILogBookRepository repo)
        {
            _repo = repo;
        }

        // GET api/logbook
        [HttpGet]
        public IEnumerable<LogBook> Get()
        {
            return _repo.Get();
        }

        // GET api/logbook/5
        [HttpGet("{id}")]
        public LogBook Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/logbook
        [HttpPost]
        public void Post([FromBody]LogBook value)
        {
            _repo.Add(value);
        }

        // PUT api/logbook/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]LogBook value)
        {
            _repo.Update(id, value);
        }

        // DELETE api/logbook/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }
    }
}
