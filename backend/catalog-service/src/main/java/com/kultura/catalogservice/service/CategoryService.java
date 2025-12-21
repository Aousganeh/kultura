package com.kultura.catalogservice.service;

import com.kultura.catalogservice.domain.entity.CategoryEntity;
import com.kultura.catalogservice.dto.category.CategoryResponse;
import com.kultura.catalogservice.dto.category.CategoryUpsertRequest;

import java.util.List;
import java.util.UUID;

public interface CategoryService {
    List<CategoryResponse> findAllActive();
    CategoryResponse create(CategoryUpsertRequest request);
    CategoryResponse update(UUID categoryId, CategoryUpsertRequest request);
    void deactivate(UUID categoryId);
    CategoryEntity getById(UUID categoryId);
}

