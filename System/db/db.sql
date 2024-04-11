DROP DATABASE IF EXISTS projetoIntegrador;
CREATE DATABASE projetoIntegrador;      
USE projetoIntegrador;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS arduino;
CREATE TABLE arduino (
    id_arduino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    localidade VARCHAR(50) NOT NULL,
    quantidade_portas INT NOT NULL

);

DROP TABLE IF EXISTS sensores;
CREATE TABLE sensores (
    id_sensor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    pino INT (2) NOT NULL
);

DROP TABLE IF EXISTS localizacao;
CREATE TABLE localizacao (
    id_local INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    endereco VARCHAR(50) NOT NULL
);



-- ---------------------------------


ALTER TABLE arduino
ADD COLUMN id_usuario INT NOT NULL,
ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);


-- Inserindo dados na tabela usuario
INSERT INTO usuario VALUES
(0, 'João Silva', 'joao@example.com', 12345678901, 'senha123'),
(0, 'Maria Souza', 'maria@example.com', 98765432109, 'senha456'),
(0, 'Carlos Ferreira', 'carlos@example.com', 11223344556, 'senha789');

-- Inserindo dados na tabela arduino
INSERT INTO arduino VALUES
(0, 'Arduino1', 'Sala', 5, 1),
(0, 'Arduino2', 'Cozinha', 3, 2),
(0, 'Arduino3', 'Quarto', 2, 3);
