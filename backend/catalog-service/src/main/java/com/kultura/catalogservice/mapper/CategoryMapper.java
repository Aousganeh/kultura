package com.kultura.catalogservice.mapper;

import com.kultura.catalogservice.domain.entity.CategoryEntity;
import com.kultura.catalogservice.dto.category.CategoryResponse;
import com.kultura.catalogservice.dto.category.CategoryUpsertRequest;
import org.springframework.stereotype.Component;

@Component
public class CategoryMapper {

    public CategoryEntity toEntity(CategoryUpsertRequest request) {
        var entity = new CategoryEntity();
        updateEntity(entity, request);
        return entity;
    }

    public void updateEntity(CategoryEntity entity, CategoryUpsertRequest request) {
        entity.setName(request.name());
        entity.setDescription(request.description());
        entity.setImageUrl(request.imageUrl());
        entity.setSortOrder(request.sortOrder() != null ? request.sortOrder() : 0);
        entity.setActive(request.active() != null ? request.active() : Boolean.TRUE);
    }

    public CategoryResponse toResponse(CategoryEntity entity) {
        return new CategoryResponse(
                entity.getId(),
                entity.getName(),
                entity.getDescription(),
                entity.getImageUrl(),
                entity.getSortOrder(),
                entity.isActive(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}

