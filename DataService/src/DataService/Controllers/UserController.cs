using DataService.Interfaces;
using DataService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Security.Claims;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DataService.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private ISharedRepository _sharedRepo;
        private IUserRepository _userRepo;

        public UserController(
            ISharedRepository sharedRepo,
            IUserRepository userRepo)
        {
            _sharedRepo = sharedRepo;
            _userRepo = userRepo;
        }

        // GET: api/user
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return _userRepo.Get();
        }

        // GET api/user/5
        [HttpGet("{id}")]
        public User Get(int id)
        {
            return _userRepo.Get(id);
        }

        // POST api/user
        [HttpPost]
        public void Post([FromBody]User value)
        {
            _userRepo.Add(value);
        }

        // PUT api/user/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]User value)
        {
            _userRepo.Update(id, value);
        }

        // DELETE api/user/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            _userRepo.Delete(id);
        }

        // POST api/user/signin
        [HttpPost("signin")]
        public async void SignIn([FromBody]User value)
        {
            if (_userRepo.Authenticate(value))
            {
                var identity = new ClaimsIdentity(_sharedRepo.AuthenticationScheme);
                identity.AddClaim(new Claim(ClaimTypes.Name, value.Name));
                var principal = new ClaimsPrincipal(identity);
                await HttpContext.Authentication.SignInAsync(_sharedRepo.AuthenticationScheme, principal);
            }
        }

        // POST api/user/signout
        [HttpPost("signout")]
        public async void SignOut()
        {
            await HttpContext.Authentication.SignOutAsync(_sharedRepo.AuthenticationScheme);
        }
    }
}
