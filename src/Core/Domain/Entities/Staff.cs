using Kultura.Domain.Entities.Common;
using Kultura.Domain.Enums;

namespace Kultura.Domain.Entities;

public class Staff : BaseEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public Duty Role { get; set; }
    public virtual ICollection<Reservation>? Reservations { get; set; }
}