package com.kultura.catalogservice.service;

import com.kultura.catalogservice.dto.food.FoodResponse;
import com.kultura.catalogservice.dto.food.FoodUpsertRequest;

import java.util.List;
import java.util.UUID;

public interface FoodService {
    List<FoodResponse> listByCategory(UUID categoryId);
    FoodResponse create(UUID categoryId, FoodUpsertRequest request);
    FoodResponse update(UUID foodId, FoodUpsertRequest request);
    void delete(UUID foodId);
}

