DROP SCHEMA IF EXISTS pet_shop;

CREATE SCHEMA pet_shop;

USE pet_shop;

CREATE TABLE
    users(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        first_name VARCHAR(50) NOT NULL,
        last_name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(100) NOT NULL,
        created_at datetime,
        updated_at datetime
    
    ) ENGINE = InnoDB;

CREATE TABLE
    donos(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        telefone VARCHAR(50) NOT NULL,
        rua VARCHAR(50) NOT NULL,
        numero INT NOT NULL,
        cidade VARCHAR(50) NOT NULL,
        estado VARCHAR(50) NOT NULL,
        cep VARCHAR(50) NOT NULL
    ) ENGINE = InnoDB;

CREATE TABLE
    pets(
        id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        dono_id INT NOT NULL,
        tipo VARCHAR(50) NOT NULL,
        nome VARCHAR(50) NOT NULL,
        idade INT NOT NULL,
        raca VARCHAR(50) NOT NULL,
        FOREIGN KEY(dono_id) REFERENCES donos(id) ON DELETE CASCADE
) ENGINE = InnoDB;

INSERT INTO users (fullName, email, password, created_at, updated_at)
VALUES ('Ana Pereira', 'ana@example.com', 'senhaabc', '2023-08-07', '2023-08-07'),
       ('Pedro Santos', 'pedro@example.com', 'senha789', '2023-08-07', '2023-08-07'),
       ('Maria Oliveira', 'maria@example.com', 'senha456', '2023-08-07', '2023-08-07');


INSERT INTO donos (nome, email, telefone, rua, numero, cidade, estado, cep)
VALUES ('Maria Silva', 'maria@example.com', '9876543210', 'Rua das Flores', 123, 'São Paulo', 'SP', '12345-678'),
       ('João Santos', 'joao@example.com', '9876543211', 'Avenida Central', 456, 'Rio de Janeiro', 'RJ', '98765-432'),
       ('Pedro Oliveira', 'pedro@example.com', '9876543212', 'Rua Principal', 789, 'Belo Horizonte', 'MG', '54321-876');


INSERT INTO pets (dono_id, tipo, nome, idade, raca)
VALUES (1, 'Cachorro', 'Rex', 3, 'Labrador'),
       (2, 'Gato', 'Miau', 2, 'Siamese'),
       (3, 'Cachorro', 'Thor', 5, 'Bulldog');



