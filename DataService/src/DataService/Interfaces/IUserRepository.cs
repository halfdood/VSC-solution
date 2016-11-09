﻿using DataService.Models;
using System.Collections.Generic;

namespace DataService.Interfaces
{
    public interface IUserRepository
    {
        void Add(User user);
        bool Authenticate(User user);
        void Delete(int id);
        List<User> Get();
        User Get(int id);
        void Update(int id, User user);
    }
}
