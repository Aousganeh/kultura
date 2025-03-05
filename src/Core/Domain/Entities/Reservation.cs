using Kultura.Domain.Entities.Common;
using Kultura.Domain.Enums;

namespace Kultura.Domain.Entities;

public class Reservation : BaseAuditableEntity
{
    public Customer Customer { get; set; }
    public DateTime ReservationDate { get; set; }
    public TimeSpan ReservationTime { get; set; }
    public int PeopleCount { get; set; }
    public int TableId { get; set; }
    public Table Table { get; set; }
    public ReservationStatus Status { get; set; }
    public string? Notes { get; set; }
    public decimal? Deposit { get; set; }
}