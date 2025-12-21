package com.kultura.catalogservice.controller;

import com.kultura.catalogservice.dto.category.CategoryResponse;
import com.kultura.catalogservice.dto.category.CategoryUpsertRequest;
import com.kultura.catalogservice.service.CategoryService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/categories")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @Operation(summary = "List all active categories")
    @GetMapping
    public List<CategoryResponse> listCategories() {
        return categoryService.findAllActive();
    }

    @Operation(summary = "Create a category")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public CategoryResponse createCategory(@Valid @RequestBody CategoryUpsertRequest request) {
        return categoryService.create(request);
    }

    @Operation(summary = "Update a category")
    @PutMapping("/{categoryId}")
    public CategoryResponse updateCategory(@PathVariable UUID categoryId, @Valid @RequestBody CategoryUpsertRequest request) {
        return categoryService.update(categoryId, request);
    }

    @Operation(summary = "Deactivate (soft delete) a category")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/{categoryId}")
    public void deleteCategory(@PathVariable UUID categoryId) {
        categoryService.deactivate(categoryId);
    }
}

