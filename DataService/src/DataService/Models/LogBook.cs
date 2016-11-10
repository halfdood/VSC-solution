using System;

namespace DataService.Models
{
    public partial class LogBook
    {
        public string CustomerName { get; set; }
        public Guid CustomerID { get; set; }
        public string DepotID { get; set; }
        public string DepotName { get; set; }
        public Guid DriverID { get; set; }
        public string DriverName { get; set; }
        public string DriverReference { get; set; }
        public string DriverTag { get; set; }
        public bool HasArrived { get; set; }
        public bool HasDeparted { get; set; }
        public int ID { get; set; }
        public decimal Lat { get; set; }
        public string LocationName { get; set; }
        public decimal Long { get; set; }
        public DateTime PlannedArrivalTime { get; set; }
        public DateTime PlannedDepartureTime { get; set; }
        public DateTime PlannedEndDate { get; set; }
        public DateTime PlannedStartDate { get; set; }
        public string RouteID { get; set; }
        public string RouteName { get; set; }
        public string SequenceNo { get; set; }
        public Guid StopElementID { get; set; }
    }
}
