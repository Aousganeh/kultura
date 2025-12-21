package com.kultura.catalogservice.service.impl;

import com.kultura.catalogservice.domain.entity.CategoryEntity;
import com.kultura.catalogservice.dto.category.CategoryResponse;
import com.kultura.catalogservice.dto.category.CategoryUpsertRequest;
import com.kultura.catalogservice.exception.NotFoundException;
import com.kultura.catalogservice.mapper.CategoryMapper;
import com.kultura.catalogservice.repository.CategoryRepository;
import com.kultura.catalogservice.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;

    @Override
    @Transactional(readOnly = true)
    public List<CategoryResponse> findAllActive() {
        return categoryRepository.findAllByActiveTrueOrderBySortOrderAscNameAsc().stream()
                .map(categoryMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public CategoryResponse create(CategoryUpsertRequest request) {
        var entity = categoryMapper.toEntity(request);
        return categoryMapper.toResponse(categoryRepository.save(entity));
    }

    @Override
    @Transactional
    public CategoryResponse update(UUID categoryId, CategoryUpsertRequest request) {
        var entity = getById(categoryId);
        categoryMapper.updateEntity(entity, request);
        return categoryMapper.toResponse(categoryRepository.save(entity));
    }

    @Override
    @Transactional
    public void deactivate(UUID categoryId) {
        var entity = getById(categoryId);
        entity.setActive(false);
        categoryRepository.save(entity);
    }

    @Override
    @Transactional(readOnly = true)
    public CategoryEntity getById(UUID categoryId) {
        return categoryRepository.findById(categoryId)
                .orElseThrow(() -> new NotFoundException("Category not found"));
    }
}

