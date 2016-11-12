using System;

namespace DataService.Models
{
    public class Result
    {
        public object data;
        public string message;
        public bool success;

        public static Result Data(object data)
        {
            return new Result
            {
                data = data,
                message = "",
                success = true
            };
        }

        public static Result Fail()
        {
            return new Result
            {
                data = null,
                message = null,
                success = false
            };
        }
    }
}
