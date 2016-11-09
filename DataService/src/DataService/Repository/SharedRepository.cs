using System;
using DataService.Interfaces;

namespace DataService.Repository
{
    public class SharedRepository : ISharedRepository
    {
        string ISharedRepository.AuthenticationScheme
        {
            get
            {
                return "CookieMiddlewareInstance";
            }
        }
    }
}
