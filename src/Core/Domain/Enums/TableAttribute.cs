namespace Kultura.Domain.Enums;

[Flags]
public enum TableAttribute
{
    None = 0,
    WindowSide = 1,
    Terrace = 2,
    VIP = 4,
    Outside = 8,
    SpecialRoom = 16,
    CigaretteZone = 32
}