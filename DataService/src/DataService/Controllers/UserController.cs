using DataService.Interfaces;
using DataService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DataService.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private IUserRepository _repo;

        public UserController(IUserRepository repo)
        {
            _repo = repo;
        }

        // GET: api/user
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _repo.Get();
        }

        // GET api/user/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _repo.Get(id);
        }

        // POST api/user
        [HttpPost]
        public void Post([FromBody]User value)
        {
            _repo.Add(value);
        }

        // PUT api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]User value)
        {
            _repo.Update(id, value);
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _repo.Delete(id);
        }

        // POST api/user/authenticate
        [HttpPost("authenticate")]
        public void Authenticate([FromBody]User value)
        {
            //_repo
        }
    }
}
