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

DROP TABLE IF EXISTS dados_sesores;
CREATE TABLE dados_sesores (
	id_dado INT AUTO_INCREMENT PRIMARY KEY,
	id_sensor INT,
	valor FLOAT NOT NULL,
	data_coleta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE arduino
ADD COLUMN id_usuario INT NOT NULL,
ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

ALTER TABLE sensores
ADD COLUMN id_arduino INT NOT NULL,
ADD FOREIGN KEY (id_arduino) REFERENCES arduino(id_arduino);

ALTER TABLE dados_sensores
ADD COLUMN id_sensor INT NOT NULL,
ADD FOREIGN KEY (id_sensor) REFERENCES arduino(id_sensor);

-- Inserções para a tabela 'usuario'
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

-- Inserções para a tabela 'arduino'
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

-- Inserções para a tabela 'sensores'
INSERT INTO sensores (nome, pino, id_arduino) VALUES
('Sensor1', 1, 1),
('Sensor2', 2, 1),
('Sensor3', 3, 2),
('Sensor4', 1, 3),
('Sensor5', 2, 4),
('Sensor6', 1, 5),
('Sensor7', 1, 6),
('Sensor8', 2, 7),
('Sensor9', 3, 8),
('Sensor10', 1, 9);

-- Inserções para a tabela 'dados_sensores'
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
