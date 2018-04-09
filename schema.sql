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

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES
("PlayStation 4", "Electronics", 300, 10),
("Fallout 4", "Electronics", 20, 30),
("Guitar", "Musical Instruments", 400, 2),
("Chair", "Home", 20, 15),
("Shampoo", "Beauty", 2, 100),
("Sweater", "Clothing", 20, 45),
("The Hobbit", "Books", 15, 25),
("Stuffed Animal", "Toys", 10, 37),
("Coffe Maker", "Home", 30, 26),
("Mascara", "Beauty", 7, 240)
