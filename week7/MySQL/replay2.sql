CREATE TABLE customer (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    birthday DATE NOT NULL
);

INSERT INTO customer (id, name, birthday) VALUES
('aaa', '홍길동', '1990-03-17'),
('bbb', '성춘향', '1992-03-17'),
('ccc', '이몽룡', '1991-03-17'),

CREATE TABLE orderlist (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    customer_id VARCHAR(10) NOT NULL,
    product_name VARCHAR(20) NOT NULL,
    quantity INT,
    FOREIGN KEY (customer_id) REFERENCES customer(id)
);

INSERT INTO orderlist (customer_id, product_name, quantity) VALUES
