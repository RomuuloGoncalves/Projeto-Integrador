DROP DATABASE IF EXISTS projetoIntegrador;
CREATE DATABASE projetoIntegrador;      
USE projetoIntegrador;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    senha VARCHAR(50) NOT NULL, 
    imagem VARCHAR(250) DEFAULT 'https://ionicframework.com/docs/img/demos/avatar.svg'

    -- FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

DROP TABLE IF EXISTS arduino;
CREATE TABLE arduino (
    id_arduino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    localidade VARCHAR(50) NOT NULL,
    quantidade_portas INT NOT NULL

    -- FOREIGN KEY (id_arduino) REFERENCES arduino(id_arduino),
    -- FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

DROP TABLE IF EXISTS sensores;
CREATE TABLE sensores (
    id_sensor INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    pino INT (2) NOT NULL
    -- FOREIGN KEY (id_sensor) REFERENCES sensores(id_sensor)
);

DROP TABLE IF EXISTS dados_sensores;
CREATE TABLE dados_sensores (
	id_dado INT AUTO_INCREMENT PRIMARY KEY,
	valor FLOAT NOT NULL,
	data_coleta TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE arduino
ADD COLUMN id_usuario INT NOT NULL,
ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

ALTER TABLE sensores
ADD COLUMN id_arduino INT NOT NULL,
ADD FOREIGN KEY (id_arduino) REFERENCES arduino(id_arduino);

ALTER TABLE sensores
ADD COLUMN id_usuario INT NOT NULL,
ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);

ALTER TABLE dados_sensores
ADD COLUMN id_sensor INT NOT NULL,
ADD FOREIGN KEY (id_sensor) REFERENCES sensores(id_sensor);

-- Inserções na tabela 'usuario'
INSERT INTO usuario (nome, email, telefone, senha)
VALUES ('João Silva', 'joao@example.com', '123456789', 'senha123'),
       ('Maria Santos', 'maria@example.com', '987654321', 'senha456'),
       ('Pedro Oliveira', 'pedro@example.com', '456789123', 'senha789'),
       ('Ana Lima', 'ana@example.com', '321654987', 'senhaabc'),
       ('Carlos Souza', 'carlos@example.com', '654987321', 'senhaxyz');

-- Inserções na tabela 'arduino'
INSERT INTO arduino (nome, localidade, quantidade_portas, id_usuario)
VALUES ('Arduino1', 'Sala', 10, 1),
       ('Arduino2', 'Cozinha', 8, 2),
       ('Arduino3', 'Quarto', 6, 3),
       ('Arduino4', 'Banheiro', 4, 4),
       ('Arduino5', 'Garagem', 12, 5);

-- Inserções na tabela 'sensores'
INSERT INTO sensores (nome, pino, id_arduino, id_usuario)
VALUES ('Sensor1', 1, 1, 1),
       ('Sensor2', 2, 1, 1),
       ('Sensor3', 3, 2, 2),
       ('Sensor4', 4, 2, 2),
       ('Sensor5', 5, 3, 3);

-- Inserções na tabela 'dados_sensores'
INSERT INTO dados_sensores (valor, id_sensor)
VALUES (25.5, 1),
       (30.2, 2),
       (15.7, 3),
       (18.9, 4),
       (22.1, 5);
