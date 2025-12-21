-- Enable pgcrypto for UUID generation
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ===========================
-- Categories Table
-- ===========================
CREATE TABLE categories (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(120) NOT NULL,
    description VARCHAR(255),
    image_url VARCHAR(255),
    sort_order INT DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Soft-delete friendly unique index (only active categories)
CREATE UNIQUE INDEX uq_categories_name_active
ON categories(name)
WHERE is_active;

-- Partial index for fast sorting of active categories
CREATE INDEX idx_categories_active_sort
ON categories(sort_order, name)
WHERE is_active;

-- ===========================
-- Foods Table
-- ===========================
CREATE TABLE foods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    name VARCHAR(160) NOT NULL,
    description VARCHAR(255),
    price NUMERIC(10, 2) NOT NULL CHECK (price >= 0),
    currency VARCHAR(8) NOT NULL DEFAULT 'AZN',
    is_available BOOLEAN NOT NULL DEFAULT TRUE,
    image_url VARCHAR(255),
    sort_order INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Partial index for fast queries of available foods
CREATE INDEX idx_foods_available_category_sort
ON foods(category_id, sort_order, name)
WHERE is_available;

-- Enforce food name uniqueness per category for available items
CREATE UNIQUE INDEX uq_foods_name_per_category
ON foods(category_id, name)
WHERE is_available;

-- ===========================
-- Trigger to auto-update updated_at
-- ===========================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = NOW();
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_categories_updated
BEFORE UPDATE ON categories
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER trg_foods_updated
BEFORE UPDATE ON foods
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();
