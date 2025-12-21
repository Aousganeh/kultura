package com.kultura.catalogservice.repository;

import com.kultura.catalogservice.domain.entity.FoodEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface FoodRepository extends JpaRepository<FoodEntity, UUID> {
    List<FoodEntity> findAllByCategory_IdOrderBySortOrderAscNameAsc(UUID categoryId);
}

