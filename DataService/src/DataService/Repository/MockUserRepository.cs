using DataService.Interfaces;
using DataService.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace DataService.Repository
{
    public class MockUserRepository : IUserRepository
    {
        private List<User> _data = new List<User>
        {
            new User { ID = 1, Name = "admin", Password = "admin" }
        };

        void IUserRepository.Add(User value)
        {
            value.ID = _data.Max(d => d.ID) + 1;
            _data.Add(value);
        }

        bool IUserRepository.Authenticate(string username, string password)
        {
            var user = _data.SingleOrDefault(u => u.Name.Equals(username, StringComparison.OrdinalIgnoreCase));

            if (user == null) return false;

            return user.Password == password;
        }

        void IUserRepository.Delete(int id)
        {
            var user = get(id);
            if (user != null)
            {
                _data.Remove(user);
            }
        }

        List<User> IUserRepository.Get()
        {
            return _data;
        }

        User IUserRepository.Get(int id)
        {
            return get(id);
        }

        void IUserRepository.Update(int id, User value)
        {
            var user = get(id);
            value.ID = user.ID;
            _data.Remove(user);
            _data.Add(value);
        }

        private User get(int id)
        {
            return _data.SingleOrDefault(u => u.ID == id);
        }
    }
}
