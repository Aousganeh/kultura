package com.kultura.catalogservice.dto.food;

import com.kultura.catalogservice.domain.value.CurrencyType;
import java.math.BigDecimal;
import java.time.Instant;
import java.util.UUID;

public record FoodResponse(
        UUID id,
        UUID categoryId,
        String name,
        String description,
        BigDecimal price,
        CurrencyType currency,
        Boolean available,
        String imageUrl,
        Integer sortOrder,
        Instant createdAt,
        Instant updatedAt
) {
}

