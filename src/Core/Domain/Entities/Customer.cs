using Kultura.Domain.Entities.Common;

namespace Kultura.Domain.Entities;

public class Customer : BaseAuditableEntity
{
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string PhoneNumber { get; set; }
}