-- Active: 1657536875348@@127.0.0.1@3306@studio
-- @block
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Maks123maks';

DROP DATABASE IF EXISTS `studio`;
CREATE DATABASE `studio`;

USE `studio`;

CREATE TABLE `reviews` (
    `uuid` VARCHAR(36) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `review` VARCHAR(255) NOT NULL,
    `date` DATETIME NOT NULL,
    `rating` INT NOT NULL,
    PRIMARY KEY (`uuid`)
);

CREATE TABLE `users` (
    `uuid` VARCHAR(36) NOT NULL,
    `username` VARCHAR(255) UNIQUE NOT NULL,
    `role` VARCHAR(10) DEFAULT 'user',
    `email` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `date` DATETIME NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`uuid`)
);

CREATE TABLE `reservations` (
    `uuid` VARCHAR(36) NOT NULL,
    `user_uuid` VARCHAR(36) NOT NULL,
    `date` DATETIME NOT NULL,
    `people` INT NOT NULL,
    `notes` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`uuid`)
);
INSERT INTO `users` VALUES ('6706aae5-7ca0-4915-b688-098c8644407c', 'admin', 'admin', 'example@example.com', 'admin', '2020-01-01 00:00:00', 'admin');