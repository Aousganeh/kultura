package com.kultura.catalogservice.dto.food;

import com.kultura.catalogservice.domain.value.CurrencyType;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

import java.math.BigDecimal;
import java.util.UUID;

public record FoodUpsertRequest(
        UUID categoryId,
        @NotBlank @Size(max = 160) String name,
        @Size(max = 255) String description,
        @NotNull @DecimalMin(value = "0.0", inclusive = true) BigDecimal price,
        CurrencyType currency,
        Boolean available,
        @Size(max = 255) String imageUrl,
        Integer sortOrder
) {

    public CurrencyType currencyOrDefault() {
        return currency == null ? CurrencyType.AZN : currency;
    }

    public boolean availableOrDefault() {
        return available == null || available;
    }

    public int sortOrderOrDefault() {
        return sortOrder == null ? 0 : sortOrder;
    }
}

