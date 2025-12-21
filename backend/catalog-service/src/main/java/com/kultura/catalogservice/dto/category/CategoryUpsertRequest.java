package com.kultura.catalogservice.dto.category;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CategoryUpsertRequest(
        @NotBlank @Size(max = 120) String name,
        @Size(max = 255) String description,
        @Size(max = 255) String imageUrl,
        Integer sortOrder,
        Boolean active
) {
}

