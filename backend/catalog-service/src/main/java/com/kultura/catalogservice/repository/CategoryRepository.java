package com.kultura.catalogservice.repository;

import com.kultura.catalogservice.domain.entity.CategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CategoryRepository extends JpaRepository<CategoryEntity, UUID> {
    List<CategoryEntity> findAllByActiveTrueOrderBySortOrderAscNameAsc();
}

