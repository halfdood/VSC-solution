﻿using DataService.Interfaces;
using DataService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace DataService.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private const string URL = "/api/user";
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
        public ActionResult Get()
        {
            return Json(new
            {
                data = _userRepo.Get(),
                href = URL
            });
        }

        // GET api/user/5
        [HttpGet("{id}")]
        public ActionResult Get(int id)
        {
            var self = URL + "/" + id.ToString();
            return Json(new
            {
                data = _userRepo.Get(id),
                href = self,
                delete = self,
                signout = URL + "/signout"
            });
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
        public async Task<Result> SignIn([FromBody]Login login)
        {
            if (_userRepo.Authenticate(login.Username, login.Password))
            {
                var identity = new ClaimsIdentity(_sharedRepo.AuthenticationScheme);
                identity.AddClaim(new Claim(ClaimTypes.Name, login.Username));
                var principal = new ClaimsPrincipal(identity);
                await HttpContext.Authentication.SignInAsync(_sharedRepo.AuthenticationScheme, principal);

                var user = _userRepo.Get(login.Username);
                return Result.Data(new
                {
                    id = user.ID,
                    name = user.Name
                });
            }

            return Result.Fail();
        }

        // POST api/user/signout
        [HttpPost("signout")]
        public async void SignOut()
        {
            await HttpContext.Authentication.SignOutAsync(_sharedRepo.AuthenticationScheme);
        }
    }
}
