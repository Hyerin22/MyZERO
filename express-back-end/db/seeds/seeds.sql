-- Cities
INSERT INTO cities (name, photo, symbol) VALUES
  ('Vancouver', 'vancouver.jpg', 'vancouver.jpg'),
  ('Burnaby', 'burnaby.jpg', 'burnaby.jpg'),
  ('North Vancouver', 'northvan.jpg', 'northvan.jpg'),
  ('Coquitlam', 'coquitlam.jpg', 'coquitlam.jpg'),
  ('Richmond', 'richmond.jpg', 'richmond.jpg'),
  ('Langley', 'langley.jpg', 'langley.jpg');

-- users
INSERT INTO users (first_name, last_name, city_id, email, password_digest) VALUES
  ('Tehi', 'Kim', 1, 'tehi@example.com', 'pwd123'),
  ('Hyelyn', 'Cheon', 2, 'hlyn@example.com', 'pwd123'),
  ('Michael', 'Johnson', 2, 'michael@example.com', 'pwd123'),
  ('Alice', 'Williams', 4, 'alice@example.com', 'pwd123'),
  ('Robert', 'Brown', 5, 'robert@example.com', 'pwd123'),
  ('Emily', 'Jones', 1, 'emily@example.com', 'pwd123'),
  ('Daniel', 'Davis', 3, 'daniel@example.com', 'pwd123'),
  ('Emma', 'Miller', 2, 'emma@example.com', 'pwd123'),
  ('Christopher', 'Wilson', 6, 'christopher@example.com', 'pwd123'),
  ('Olivia', 'Lee', 4, 'olivia@example.com', 'pwd123'),
  ('Raj', 'Patel', 6, 'raj.patel@example.com', 'pwd123'),
  ('Li', 'Chen', 1,'li.chen@example.com', 'pwd123'),
  ('Haruki', 'Nakamura', 5,'haruki.nakamura@example.com', 'pwd123'),
  ('Ji-hye', 'Lee', 3,'ji-hye.lee@example.com', 'pwd123'),
  ('Wei', 'Liu', 4,'wei.liu@example.com', 'pwd123'),
  ('Rina', 'Takahashi', 2,'rina.takahashi@example.com', 'pwd123'),
  ('Aarav', 'Sharma', 3,'aarav.sharma@example.com', 'pwd123'),
  ('Mei', 'Wong', 6,'mei.wong@example.com', 'pwd123');

-- points
INSERT INTO points (user_id, city_id, point) VALUES
  (1, 1, 20),
  (2, 2, 5),
  (3, 2, 20),
  (4, 4, 5),
  (5, 5, 20),
  (6, 1, 5),
  (7, 3, 20),
  (8, 2, 5),
  (9, 6, 20),
  (10, 4, 5),
  (11, 6, 5),
  (12, 1, 20),
  (13, 5, 20),
  (14, 3, 5),
  (15, 4, 20),
  (16, 2, 5),
  (17, 3, 20),
  (18, 6, 5),
  (1, 1, 20),
  (2, 2, 5),
  (1, 1, 5),
  (2, 2, 20),
  (1, 1, 5),
  (2, 2, 20),
  (1, 1, 20),
  (2, 2, 5),
  (1, 1, 5),
  (2, 2, 5),
  (1, 1, 20),
  (2, 2, 5),
  (1, 1, 20),
  (2, 2, 5),
  (1, 1, 5),
  (2, 2, 5),
  (1, 1, 20),
  (2, 2, 5),
  (1, 1, 20),
  (2, 2, 5);

-- products
INSERT INTO products (name, point, store, description, photo) VALUES
  ('Reusable Foldable Grocery Tote Bags', 220, 'Walmart', '4-Packs, Size: 55*33*8cm, folding into a attached pocket, maximum load: 44lb', 'product01.jpg'),
  ('Reusable K Cups For Keurig Coffee Pods', 340, 'Walmart', '2-Packs, stainless steel and 100% BPA, lead, and DEHP free', 'product02.jpg'),
  ('Reusable Silicone Sponge', 360, 'Walmart', '10-Packs, Size: 4.33"x4.33", BPA free, heat resistant to 500°F', 'product03.jpg'),
  ('Reusable Paper Towels Washable Roll', 700, 'Walmart', '48-Packs, Kitchen Paperless Paper Towels, 10" x 10", Cotton Cloth Paper Towels', 'product04.jpg'),
  ('Reusable Beeswax Food Storage Wrap', 280, 'Walmart', 'Set of Three, 7" 10" and 13" Natural Square Sheets', 'product05.jpg'),
  ('Reusable Stainless Steel Straws', 180, 'Walmart', '10.5" Long, 2 Straight + 2 Bent + 1 Brush', 'product06.jpg'),
  ('Greenzla Reusable Gallon Bags', 370, 'Superstore', '8-Packs, food-grade TPE material, 11"x10.6"', 'product07.jpg'),
  ('Reusable Air Fryer Silicone Pot', 410, 'Superstore', '3-Packs, Air Fryer Silicone Pot, 8.5"', 'product08.jpg'),
  ('Reusable Silicone Baking Mat', 360, 'Superstore', '3-Packs, Silicone Baking mat, 30 x 40 cm', 'product09.jpg');
  

-- usage
INSERT INTO usage (user_id, product_id, point_id) VALUES
  (1, 1, 1),
  (2, 2, 2);
