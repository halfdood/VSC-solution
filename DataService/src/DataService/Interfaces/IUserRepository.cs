using DataService.Models;
using System.Collections.Generic;

namespace DataService.Interfaces
{
    public interface IUserRepository
    {
        List<User> Get();
        User Get(int id);
        void Add(User user);
        void Update(int id, User user);
        void Delete(int id);
    }
}
