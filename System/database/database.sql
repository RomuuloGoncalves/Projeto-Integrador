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

-- DROP TABLE IF EXISTS localizacao;
-- CREATE TABLE localizacao (
--     id_local INT AUTO_INCREMENT PRIMARY KEY,
--     nome VARCHAR(50) NOT NULL,
--     endereco VARCHAR(50) NOT NULL
-- );

-- ---------------------------------


ALTER TABLE arduino
ADD COLUMN id_usuario INT NOT NULL,
ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

ALTER TABLE sensores
ADD COLUMN id_arduino INT NOT NULL,
ADD FOREIGN KEY (id_arduino) REFERENCES arduino(id_arduino);


INSERT INTO usuario (nome, email, telefone, senha) VALUES
('a', 'a@a', '(11) 1234-5678', 'asdfasdf'),
('Maria Oliveira', 'maria@example.com', '(22) 9876-5432', 'senha456'),
('Pedro Santos', 'pedro@example.com', '(33) 4567-8901', 'senha789'),
('Ana Costa', 'ana@example.com', '(44) 8765-4321', 'senhaabc'),
('Carlos Pereira', 'carlos@example.com', '(55) 2345-6789', 'senhadef'),
('Juliana Almeida', 'juliana@example.com', '(66) 7654-3210', 'senhaghi'),
('Luiz Fernandes', 'luiz@example.com', '(77) 5432-1098', 'senhajkl'),
('Mariana Rodrigues', 'mariana@example.com', '(88) 3210-9876', 'senhamno'),
('Felipe Oliveira', 'felipe@example.com', '(99) 2109-8765', 'senhaqrs'),
('Amanda Silva', 'amanda@example.com', '(00) 1098-7654', 'senhautv');


-- Inserindo dados na tabela arduino
INSERT INTO arduino (nome, localidade, quantidade_portas, id_usuario) VALUES
('Arduino01', 'Sala', 4, 1),
('Arduino02', 'Cozinha', 2, 2),
('Arduino03', 'Quarto 1', 3, 3),
('Arduino04', 'Quarto 2', 5, 4),
('Arduino05', 'Varanda', 2, 5),
('Arduino06', 'Garagem', 6, 6),
('Arduino07', 'Escritório', 4, 7),
('Arduino08', 'Área de serviço', 3, 8),
('Arduino09', 'Jardim', 2, 9),
('Arduino10', 'Banheiro', 1, 10);

-- Inserindo dados na tabela sensor
INSERT INTO sensores (nome, pino, id_arduino) VALUES
('Sensor01', 1, 1),
('Sensor02', 2, 1),
('Sensor03', 3, 2),
('Sensor04', 4, 2),
('Sensor05', 1, 3),
('Sensor06', 2, 3),
('Sensor07', 1, 4),
('Sensor08', 2, 4),
('Sensor09', 3, 5),
('Sensor10', 1, 5);

