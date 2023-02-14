CREATE DATABASE db_dripstore;

USE db_dripstore;

CREATE TABLE tb_category (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    description VARCHAR(50),
    image VARCHAR(255) NOT NULL
);

INSERT INTO tb_category 
    (id, name, description, image)
VALUES 
    ('22171c3e-987d-4bfe-a251-ed2baf119190', 'Tenis', 'tenis em geral', 'img01'),
    ('22171c3e-987d-4bfe-a251-ed2baf119112', 'Bonés', 'bones em geral', 'img02'),
    ('22171c3e-987d-4bfe-a251-ed2baf119156', 'Camisas', 'Camisas em geral', 'img03'),
    ('22171c3e-987d-4bfe-a251-ed2baf119134', 'Headphones', 'headphones em geral', 'img04');



-- TABELA DOS CLIENTES --
CREATE TABLE tb_customer (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    phone VARCHAR(20) NOT NULL
);

INSERT INTO tb_customer (id, name, email, phone)
VALUES 
    ('23b48a05-99d7-4365-930d-37650267a838', 'Chiquim da Silva', 'chiquim@email.com', '85 9 8787-1234'),
    ('12348a05-99d7-4365-930d-37650267a838', 'Maria da Silva', 'maria@email.com', '85 9 8712-1234'),
    ('45648a05-99d7-4365-930d-37650267a838', 'Zezim da Silva', 'ze@email.com', '85 9 8456-1234'),
    ('67848a05-99d7-4365-930d-37650267a838', 'Thompson da Silva', 'thomp@email.com', '85 9 8948-1234');
