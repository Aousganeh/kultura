﻿namespace Kultura.Domain.Entities.Common;

public abstract class BaseAuditableEntity : BaseEntity
{
    public DateTime CreatedDate { get; set; }
    public string? CreatedBy { get; set; }
    public DateTime LastModifiedDate { get; set; }
    public string? LastModifiedBy { get; set; }
}
