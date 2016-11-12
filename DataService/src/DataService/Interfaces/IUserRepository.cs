using DataService.Models;
using System.Collections.Generic;

namespace DataService.Interfaces
{
    public interface IUserRepository
    {
        void Add(User user);
        bool Authenticate(string username, string password);
        void Delete(int id);
        List<User> Get();
        User Get(int id);
        User Get(string name);
        void Update(int id, User user);
    }
}
