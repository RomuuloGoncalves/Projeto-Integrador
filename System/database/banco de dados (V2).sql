/*-- Remover o banco de dados se já existir
DROP DATABASE IF EXISTS projetoIntegrador;

-- Criar o banco de dados
CREATE DATABASE projetoIntegrador;

-- Usar o banco de dados criado
USE projetoIntegrador;

-- Tabela 'usuario' para armazenar informações dos usuários
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL, 
    imagem VARCHAR(250) DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg'
);

-- Tabela 'arduino' para armazenar informações dos arduinos
CREATE TABLE arduino (
    id_arduino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    localidade VARCHAR(50) NOT NULL,
    quantidade_portas INT NOT NULL,
    id_usuario INT NOT NULL,
    id_
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabela 'sensores' para armazenar informações dos sensores
CREATE TABLE sensores (
    id_sensor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    pino INT NOT NULL,
    id_arduino INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_arduino) REFERENCES arduino(id_arduino),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabela 'dados_sensores' para armazenar dados coletados pelos sensores
CREATE TABLE dados_sensores (
    id_dado INT AUTO_INCREMENT PRIMARY KEY,
    id_sensor INT NOT NULL,
    valor FLOAT NOT NULL,
    data_coleta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_sensor) REFERENCES sensores(id_sensor)
);

-- Inserções na tabela 'usuario'
INSERT INTO usuario (nome, email, telefone, senha) VALUES
('Usuario', 'a', '(11) 1234-5678', 'asdfasdf'),
('João Silva', 'joao@example.com', '123456789', 'senha123'),
('Maria Souza', 'maria@example.com', '987654321', 'senha456'),
('Pedro Santos', 'pedro@example.com', '111222333', 'senha789'),
('Ana Oliveira', 'ana@example.com', '444555666', 'senhaabc'),
('Lucas Pereira', 'lucas@example.com', '777888999', 'senhadef'),
('Carla Mendes', 'carla@example.com', '000999888', 'senhaghi'),
('Gabriel Lima', 'gabriel@example.com', '222333444', 'senhajkl'),
('Fernanda Costa', 'fernanda@example.com', '555666777', 'senhamno'),
('Rafaela Xavier', 'rafaela@example.com', '888999000', 'senhapqr'),
('Daniel Almeida', 'daniel@example.com', '123123123', 'senhastu');

-- Inserções na tabela 'arduino'
INSERT INTO arduino (nome, localidade, quantidade_portas, id_usuario) VALUES
('Arduino1', 'Sala de estar', 4, 1),
('Arduino2', 'Quarto 1', 2, 2),
('Arduino3', 'Cozinha', 3, 3),
('Arduino4', 'Sala de jantar', 5, 4),
('Arduino5', 'Quarto 2', 2, 5),
('Arduino6', 'Banheiro', 1, 6),
('Arduino7', 'Escritório', 4, 7),
('Arduino8', 'Garagem', 3, 8),
('Arduino9', 'Varanda', 2, 9),
('Arduino10', 'Área de serviço', 3, 10);

-- Inserções na tabela 'sensores'
INSERT INTO sensores (nome, pino, id_arduino, id_usuario) VALUES
('Sensor1', 1, 1, 1),
('Sensor2', 2, 1, 1),
('Sensor3', 3, 2, 2),
('Sensor4', 1, 3, 3),
('Sensor5', 2, 4, 4),
('Sensor6', 1, 5, 5),
('Sensor7', 1, 6, 6),
('Sensor8', 2, 7, 7),
('Sensor9', 3, 8, 8),
('Sensor10', 1, 9, 9);

-- Inserções na tabela 'dados_sensores'
INSERT INTO dados_sensores (id_sensor, valor, data_coleta) VALUES
(1, 25.3, '2024-04-13 08:00:00'),
(2, 30.1, '2024-04-13 08:10:00'),
(3, 22.5, '2024-04-13 08:20:00'),
(4, 18.7, '2024-04-13 08:30:00'),
(5, 26.8, '2024-04-13 08:40:00'),
(6, 29.5, '2024-04-13 08:50:00'),
(7, 24.9, '2024-04-13 09:00:00'),
(8, 21.2, '2024-04-13 09:10:00'),
(9, 27.6, '2024-04-13 09:20:00'),
(10, 23.4, '2024-04-13 09:30:00');
-- Remover o banco de dados se já existir*/
DROP DATABASE IF EXISTS projetoIntegrador;

-- Criar o banco de dados
CREATE DATABASE projetoIntegrador;

-- Usar o banco de dados criado
USE projetoIntegrador;

-- Tabela 'usuario' para armazenar informações dos usuários
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL, 
    imagem VARCHAR(250) DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg'
);

-- Tabela 'arduino' para armazenar informações dos arduinos
CREATE TABLE arduino (
    id_arduino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    localidade VARCHAR(50) NOT NULL,
    quantidade_portas INT NOT NULL,
    id_usuario INT NOT NULL,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabela 'sensores' para armazenar informações dos sensores
CREATE TABLE sensores (
    id_sensor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    pino INT NOT NULL,
    id_arduino INT NOT NULL,
    id_usuario INT NOT NULL,
    
    FOREIGN KEY (id_arduino) REFERENCES arduino(id_arduino),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Tabela 'dados_sensores' para armazenar dados coletados pelos sensores
CREATE TABLE dados_sensores (
    id_dado INT AUTO_INCREMENT PRIMARY KEY,
    id_sensor INT NOT NULL,
    valor FLOAT NOT NULL,
    data_coleta TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_sensor) REFERENCES sensores(id_sensor)
);

-- Inserções na tabela 'usuario'
INSERT INTO usuario (nome, email, telefone, senha) VALUES
('Usuario', 'a', '(11) 1234-5678', 'asdfasdf'),
('João Silva', 'joao@example.com', '123456789', 'senha123'),
('Maria Souza', 'maria@example.com', '987654321', 'senha456'),
('Pedro Santos', 'pedro@example.com', '111222333', 'senha789'),
('Ana Oliveira', 'ana@example.com', '444555666', 'senhaabc'),
('Lucas Pereira', 'lucas@example.com', '777888999', 'senhadef'),
('Carla Mendes', 'carla@example.com', '000999888', 'senhaghi'),
('Gabriel Lima', 'gabriel@example.com', '222333444', 'senhajkl'),
('Fernanda Costa', 'fernanda@example.com', '555666777', 'senhamno'),
('Rafaela Xavier', 'rafaela@example.com', '888999000', 'senhapqr'),
('Daniel Almeida', 'daniel@example.com', '123123123', 'senhastu');

-- Inserções na tabela 'arduino'
INSERT INTO arduino (nome, localidade, quantidade_portas, id_usuario) VALUES
('Arduino1', 'Sala de estar', 4, 1),
('Arduino2', 'Quarto 1', 2, 2),
('Arduino3', 'Cozinha', 3, 3),
('Arduino4', 'Sala de jantar', 5, 4),
('Arduino5', 'Quarto 2', 2, 5),
('Arduino6', 'Banheiro', 1, 6),
('Arduino7', 'Escritório', 4, 7),
('Arduino8', 'Garagem', 3, 8),
('Arduino9', 'Varanda', 2, 9),
('Arduino10', 'Área de serviço', 3, 10);

-- Inserções na tabela 'sensores'
INSERT INTO sensores (nome, pino, id_arduino, id_usuario) VALUES
('Sensor1', 1, 1, 1),
('Sensor2', 2, 1, 1),
('Sensor3', 3, 2, 2),
('Sensor4', 1, 3, 3),
('Sensor5', 2, 4, 4),
('Sensor6', 1, 5, 5),
('Sensor7', 1, 6, 6),
('Sensor8', 2, 7, 7),
('Sensor9', 3, 8, 8),
('Sensor10', 1, 9, 9);

-- Inserções na tabela 'dados_sensores'
INSERT INTO dados_sensores (id_sensor, valor, data_coleta) VALUES
(1, 25.3, '2024-04-13 08:00:00'),
(2, 30.1, '2024-04-13 08:10:00'),
(3, 22.5, '2024-04-13 08:20:00'),
(4, 18.7, '2024-04-13 08:30:00'),
(5, 26.8, '2024-04-13 08:40:00'),
(6, 29.5, '2024-04-13 08:50:00'),
(7, 24.9, '2024-04-13 09:00:00'),
(8, 21.2, '2024-04-13 09:10:00'),
(9, 27.6, '2024-04-13 09:20:00'),
(10, 23.4, '2024-04-13 09:30:00');
