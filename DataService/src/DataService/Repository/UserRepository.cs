using DataService.Interfaces;
using DataService.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataService.Repository
{
    public class UserRepository : IUserRepository
    {
        private DataContext _context;

        public DbSet<User> Users { get { return _context.Set<User>(); } }

        public UserRepository(DataContext context)
        {
            _context = context;
        }

        bool IUserRepository.Authenticate(string username, string password)
        {
            var user = Users
                .Where(u => u.Name.ToLower() == username.ToLower())
                .SingleOrDefault();

            return user != null ? password == user.Password : false;
        }

        void IUserRepository.Add(User user)
        {
            sanitise(user);
            validate(user);

            Users.Add(user);
            _context.SaveChanges();
        }

        void IUserRepository.Delete(int id)
        {
            Users.Remove(new User { ID = id });
            _context.SaveChanges();
        }

        List<User> IUserRepository.Get()
        {
            return Users.ToList();
        }

        User IUserRepository.Get(int id)
        {
            return get(id);
        }

        User IUserRepository.Get(string name)
        {
            return Users.SingleOrDefault(u => u.Name.ToLower() == name.ToLower());
        }

        void IUserRepository.Update(int id, User user)
        {
            sanitise(user);
            validate(user);

            var entity = Users.SingleOrDefault(u => u.ID == id);

            entity.Name = user.Name;
            entity.Password = user.Password;
        }

        private User get(int id)
        {
            return Users.SingleOrDefault(u => u.ID == id);
        }

        private void sanitise(User user)
        {
            user.Name = user.Name.Trim();
        }

        private void validate(User user)
        {
            var errors = new List<Exception>();

            if (string.IsNullOrWhiteSpace(user.Name))
                errors.Add(new Exception("The username is required."));
            if (user.Password.Length < 5)
                errors.Add(new Exception("The password must be at least 5 characters long."));
            if (!user.Password.Any(c => char.IsNumber(c)))
                errors.Add(new Exception("The password should contain at least 1 number."));
            if (!user.Password.Any(c => char.IsUpper(c)))
                errors.Add(new Exception("The password should contain at least 1 upper case letter."));
            if (!user.Password.Any(c => char.IsLower(c)))
                errors.Add(new Exception("The password should contain at least 1 lower case letter."));

            if (errors.Count > 0)
                throw new AggregateException(errors);
        }
    }
}
