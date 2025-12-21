INSERT INTO categories (id, name, description, image_url, sort_order)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Səhər yeməyi', 'Breakfast items', '/breakfast-icon.png', 10),
  ('00000000-0000-0000-0000-000000000002', 'Qəlyanaltılar', 'Snacks', '/snacks-icon.png', 20),
  ('00000000-0000-0000-0000-000000000003', 'Əsas yeməklər', 'Main dishes', '/main-dishes-icon.png', 30),
  ('00000000-0000-0000-0000-000000000004', 'Pasta', 'Pasta', '/pasta-icon.png', 40),
  ('00000000-0000-0000-0000-000000000005', 'İçkilər', 'Beverages', '/pasta-icon.png', 50)
ON CONFLICT DO NOTHING;

INSERT INTO foods (category_id, name, description, price, currency, is_available, image_url, sort_order)
VALUES
  ('00000000-0000-0000-0000-000000000001', 'Mini şah plov', 'Rice with dried fruits', 12.00, 'AZN', TRUE, '/item-placeholder.png', 10),
  ('00000000-0000-0000-0000-000000000001', 'Şərqsayağı badımcan', 'Eggplant starter', 66.70, 'AZN', TRUE, '/item-placeholder.png', 20),
  ('00000000-0000-0000-0000-000000000002', 'Çöp şiş köftə', 'Grilled meatballs', 14.00, 'AZN', TRUE, '/item-placeholder.png', 10),
  ('00000000-0000-0000-0000-000000000003', 'Can əti göbələk sousu ilə', 'Beef with mushroom sauce', 22.00, 'AZN', TRUE, '/item-placeholder.png', 10),
  ('00000000-0000-0000-0000-000000000004', 'Manzo e fettuccine', 'Pasta with beef', 22.00, 'AZN', TRUE, '/item-placeholder.png', 10),
  ('00000000-0000-0000-0000-000000000005', 'Sərinləşdirici içkilər', 'Cold drinks', 5.00, 'AZN', TRUE, '/item-placeholder.png', 10)
ON CONFLICT DO NOTHING;

