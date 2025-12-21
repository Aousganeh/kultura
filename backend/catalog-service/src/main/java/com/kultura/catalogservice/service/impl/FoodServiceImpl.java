package com.kultura.catalogservice.service.impl;

import com.kultura.catalogservice.domain.entity.CategoryEntity;
import com.kultura.catalogservice.domain.entity.FoodEntity;
import com.kultura.catalogservice.dto.food.FoodResponse;
import com.kultura.catalogservice.dto.food.FoodUpsertRequest;
import com.kultura.catalogservice.exception.NotFoundException;
import com.kultura.catalogservice.mapper.FoodMapper;
import com.kultura.catalogservice.repository.FoodRepository;
import com.kultura.catalogservice.service.CategoryService;
import com.kultura.catalogservice.service.FoodService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class FoodServiceImpl implements FoodService {

    private final FoodRepository foodRepository;
    private final CategoryService categoryService;
    private final FoodMapper foodMapper;

    @Override
    @Transactional(readOnly = true)
    public List<FoodResponse> listByCategory(UUID categoryId) {
        CategoryEntity category = categoryService.getById(categoryId);
        return foodRepository.findAllByCategory_IdOrderBySortOrderAscNameAsc(category.getId()).stream()
                .map(foodMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public FoodResponse create(UUID categoryId, FoodUpsertRequest request) {
        CategoryEntity category = categoryService.getById(categoryId);
        var entity = foodMapper.toEntity(request);
        entity.setCategory(category);
        return foodMapper.toResponse(foodRepository.save(entity));
    }

    @Override
    @Transactional
    public FoodResponse update(UUID foodId, FoodUpsertRequest request) {
        var food = getFood(foodId);

        var category = categoryService.getById(request.categoryId());
        food.setCategory(category);
        foodMapper.updateEntity(food, request);
        return foodMapper.toResponse(foodRepository.save(food));
    }

    @Override
    @Transactional
    public void delete(UUID foodId) {
        foodRepository.delete(getFood(foodId));
    }

    private FoodEntity getFood(UUID foodId) {
        return foodRepository.findById(foodId)
                .orElseThrow(() -> new NotFoundException("Food not found"));
    }
}

