using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataService.Models
{
    public partial class DriverLog
    {
        public int ID { get; set; }
        public string Lat { get; set; }
        public string Long { get; set; }
    }
}
