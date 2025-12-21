package com.kultura.catalogservice.controller;

import com.kultura.catalogservice.dto.food.FoodResponse;
import com.kultura.catalogservice.dto.food.FoodUpsertRequest;
import com.kultura.catalogservice.service.FoodService;
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
@RequestMapping("/api")
@RequiredArgsConstructor
public class FoodController {

    private final FoodService foodService;

    @Operation(summary = "List foods for a category")
    @GetMapping("/categories/{categoryId}/foods")
    public List<FoodResponse> listFoodsByCategory(@PathVariable UUID categoryId) {
        return foodService.listByCategory(categoryId);
    }

    @Operation(summary = "Create food in a category")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/categories/{categoryId}/foods")
    public FoodResponse createFood(@PathVariable UUID categoryId, @Valid @RequestBody FoodUpsertRequest request) {
        return foodService.create(categoryId, request);
    }

    @Operation(summary = "Update a food")
    @PutMapping("/foods/{foodId}")
    public FoodResponse updateFood(@PathVariable UUID foodId, @Valid @RequestBody FoodUpsertRequest request) {
        return foodService.update(foodId, request);
    }

    @Operation(summary = "Delete a food")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @DeleteMapping("/foods/{foodId}")
    public void deleteFood(@PathVariable UUID foodId) {
        foodService.delete(foodId);
    }
}

