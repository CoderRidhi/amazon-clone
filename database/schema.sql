-- CREATE TABLE products (
--   id SERIAL PRIMARY KEY,
--   name VARCHAR(255),
--   price INT,
--   image TEXT
-- );
CREATE DATABASE amazon_clone;
USE amazon_clone;

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  price INT,
  description TEXT,
  category VARCHAR(100),
  image VARCHAR(255),
  stock INT
);

INSERT INTO products (name, price, description, category, image, stock) VALUES
('Laptop', 50000, 'High performance laptop', 'Electronics', 'http://localhost:5000/images/laptop.jpg', 10),
('Phone', 20000, 'Smartphone', 'Electronics', 'http://localhost:5000/images/phone.jpg', 15),
('T-Shirt', 999, 'Cotton T-Shirt', 'Fashion', 'http://localhost:5000/images/shirt.jpg', 20);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  total_amount INT,
  address TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT,
  product_id INT,
  quantity INT,
  price INT,
  FOREIGN KEY (order_id) REFERENCES orders(id),
  FOREIGN KEY (product_id) REFERENCES products(id)
);
CREATE TABLE cart (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  product_id INT,
  quantity INT,
  FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Electronics
INSERT INTO products (name, price, description, category, image, stock) VALUES
('Samsung TV', 45000, 'Smart LED TV', 'Electronics', 'http://localhost:5000/images/tv.jpg', 5),
('Boat Earbuds', 1999, 'Wireless earbuds', 'Electronics', 'http://localhost:5000/images/earbuds.jpg', 20);

-- Fashion
INSERT INTO products (name, price, description, category, image, stock) VALUES
('Jeans', 1999, 'Denim jeans', 'Fashion', 'http://localhost:5000/images/jeans.jpg', 15),
('Jacket', 2999, 'Winter jacket', 'Fashion', 'http://localhost:5000/images/jacket.jpg', 10);

-- Footwear
INSERT INTO products (name, price, description, category, image, stock) VALUES
('Sneakers', 2499, 'Casual sneakers', 'Footwear', 'http://localhost:5000/images/sneakers.jpg', 12),
('Sandals', 999, 'Comfort sandals', 'Footwear', 'http://localhost:5000/images/sandals.jpg', 18);

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);