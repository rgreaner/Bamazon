DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;

 USE bamazondb;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(500) NOT NULL,
  departmen_name VARCHAR(500),
  price INT,
  stock_quantity INT,
  PRIMARY KEY (id)
);