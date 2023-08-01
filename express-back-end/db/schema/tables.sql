-- Drop tables if they exist
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cities CASCADE;
DROP TABLE IF EXISTS city_user CASCADE;
DROP TABLE IF EXISTS points CASCADE;
DROP TABLE IF EXISTS products CASCADE;
DROP TABLE IF EXISTS usage CASCADE;

-- Create user table
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  city_id INTEGER,
  email VARCHAR(255) NOT NULL,
  password_digest VARCHAR(255) NOT NULL
);

-- Create city table
CREATE TABLE cities (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  photo VARCHAR(255),
  symbol VARCHAR(255)
);

-- Create city_user table
CREATE TABLE city_user (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  city_id INTEGER REFERENCES cities(id)
);

-- Create point table
CREATE TABLE points (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  city_id INTEGER REFERENCES cities(id),
  point INTEGER NOT NULL,
  date DATE DEFAULT CURRENT_DATE NOT NULL
);

-- Create product table
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(100) NOT NULL,
  store VARCHAR(100) NOT NULL,
  point INTEGER NOT NULL,
  description TEXT NOT NULL,
  photo VARCHAR(255)
);

-- Create usage table
CREATE TABLE usage (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  product_id INTEGER REFERENCES products(id),
  point_id INTEGER REFERENCES points(id),
  date DATE DEFAULT CURRENT_DATE NOT NULL
);