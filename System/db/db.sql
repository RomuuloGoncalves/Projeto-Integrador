DROP DATABASE IF EXISTS projetoIntegrador;
CREATE DATABASE projetoIntegrador;      
USE projetoIntegrador;

DROP TABLE IF EXISTS usuario;
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    telefone INT(11) NOT NULL,
    senha VARCHAR(50) NOT NULL
);

DROP TABLE IF EXISTS arduino;
CREATE TABLE arduino (
    id_arduino INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
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