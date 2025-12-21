package com.kultura.catalogservice.mapper;

import com.kultura.catalogservice.domain.entity.FoodEntity;
import com.kultura.catalogservice.dto.food.FoodResponse;
import com.kultura.catalogservice.dto.food.FoodUpsertRequest;
import org.springframework.stereotype.Component;

@Component
public class FoodMapper {

    public FoodEntity toEntity(FoodUpsertRequest request) {
        var entity = new FoodEntity();
        updateEntity(entity, request);
        return entity;
    }

    public void updateEntity(FoodEntity entity, FoodUpsertRequest request) {
        entity.setName(request.name());
        entity.setDescription(request.description());
        entity.setPrice(request.price());
        entity.setCurrency(request.currencyOrDefault());
        entity.setAvailable(request.availableOrDefault());
        entity.setImageUrl(request.imageUrl());
        entity.setSortOrder(request.sortOrderOrDefault());
    }

    public FoodResponse toResponse(FoodEntity entity) {
        var categoryId = entity.getCategory() != null ? entity.getCategory().getId() : null;
        return new FoodResponse(
                entity.getId(),
                categoryId,
                entity.getName(),
                entity.getDescription(),
                entity.getPrice(),
                entity.getCurrency(),
                entity.isAvailable(),
                entity.getImageUrl(),
                entity.getSortOrder(),
                entity.getCreatedAt(),
                entity.getUpdatedAt()
        );
    }
}

