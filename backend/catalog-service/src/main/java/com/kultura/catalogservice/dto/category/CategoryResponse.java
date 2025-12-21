package com.kultura.catalogservice.dto.category;

import java.time.Instant;
import java.util.UUID;

public record CategoryResponse(
        UUID id,
        String name,
        String description,
        String imageUrl,
        Integer sortOrder,
        Boolean active,
        Instant createdAt,
        Instant updatedAt
) {
}

