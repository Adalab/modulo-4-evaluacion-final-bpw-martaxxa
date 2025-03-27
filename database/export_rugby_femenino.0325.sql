-- MySQL dump 10.13  Distrib 8.0.41, for macos15 (x86_64)
--
-- Host: localhost    Database: rugby_femenino
-- ------------------------------------------------------
-- Server version	9.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Leagues`
--

DROP TABLE IF EXISTS `Leagues`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Leagues` (
  `league_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `level` varchar(45) NOT NULL,
  `organization` varchar(100) NOT NULL,
  PRIMARY KEY (`league_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Leagues`
--

LOCK TABLES `Leagues` WRITE;
/*!40000 ALTER TABLE `Leagues` DISABLE KEYS */;
INSERT INTO `Leagues` VALUES (1,'División de Honor','Nacional','Federación Española de Rugby'),(2,'División de Honor B','Nacional','Federación Española de Rugby'),(3,'Regional','Autonómico','Federación autonómica');
/*!40000 ALTER TABLE `Leagues` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Players`
--

DROP TABLE IF EXISTS `Players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Players` (
  `player_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `position` enum('primera','segunda','tercera','zaguero','medio','apertura','ala','centro') DEFAULT NULL,
  `nationality` varchar(45) DEFAULT NULL,
  `team_id` int NOT NULL,
  PRIMARY KEY (`player_id`),
  KEY `fk_Players_Teams1_idx` (`team_id`),
  CONSTRAINT `fk_Players_Teams1` FOREIGN KEY (`team_id`) REFERENCES `Teams` (`team_id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Players`
--

LOCK TABLES `Players` WRITE;
/*!40000 ALTER TABLE `Players` DISABLE KEYS */;
INSERT INTO `Players` VALUES (1,'Marta','Carmona','ala','España',1),(2,'Lucía','Díaz','medio','España',2),(3,'Zahía','Pérez','apertura','España',3),(4,'Maica','Martí','primera','España',4),(5,'Belén','Laguna','segunda','España',5),(6,'Ariadna','Anto','centro','España',6),(7,'Inés','Bueso','apertura','España',7),(8,'Elisa','Castro','tercera','España',8),(9,'Ana','Puig','segunda','España',9),(10,'María del Pilar','Grijota','zaguero','España',10),(11,'Marta','Tejedo','apertura','España',11),(12,'Iera','Echevarria','zaguero','España',12),(13,'Jone','Carral','tercera','España',13),(14,'Beatriz','Almarán','tercera','España',14),(15,'Carlota','Pardo','ala','España',15),(16,'Noelia','Garcia','primera','España',16),(17,'Andrea','Garcia','primera','España',17),(18,'Carmen','Carmona','apertura','España',18),(19,'Ana','Martinez','apertura','España',19),(20,'Carla','Olomi','ala','España',20),(21,'Itziar','Salinas','medio','España',21),(22,'Mariana','Mendivil','medio','España',22),(23,'Uxue','Alonso','tercera','España',23),(24,'Lucia','Oliver','segunda','España',24),(25,'Rebeca','Muñiz','centro','España',25),(26,'Ana','Peralta','tercera','España',1);
/*!40000 ALTER TABLE `Players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Teams`
--

DROP TABLE IF EXISTS `Teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Teams` (
  `team_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `city` varchar(45) NOT NULL,
  `color_primary` enum('verde','negro','rojo','azul','blanco','amarillo','morado','naranja','rosa') DEFAULT NULL,
  `color_secondary` enum('verde','negro','rojo','azul','blanco','amarillo','morado','naranja','rosa') DEFAULT NULL,
  `league_id` int NOT NULL,
  PRIMARY KEY (`team_id`),
  KEY `fk_Teams_Leagues_idx` (`league_id`),
  CONSTRAINT `fk_Teams_Leagues` FOREIGN KEY (`league_id`) REFERENCES `Leagues` (`league_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Teams`
--

LOCK TABLES `Teams` WRITE;
/*!40000 ALTER TABLE `Teams` DISABLE KEYS */;
INSERT INTO `Teams` VALUES (1,'Universitario de Sevilla CR','Sevilla','verde','negro',1),(2,'CR Majadahonda','Madrid','azul','rojo',1),(3,'Complutense Cisneros','Madrid','azul','blanco',1),(4,'CRAT A Coruña','A Coruña','negro','azul',1),(5,'Getxo Rugby','Getxo','negro','amarillo',1),(6,'Barça Rugbi','Barcelona','azul','rojo',1),(7,'CR Sant Cugat','Barcelona','azul','blanco',1),(8,'CR El Salvador','Valladolid','negro','blanco',1),(9,'Unió Esportiva Santboiana','Barcelona','azul',NULL,2),(10,'CEFA-UNIZAR','Zaragoza','morado','blanco',2),(11,'Jabatas Móstoles','Madrid','verde','amarillo',2),(12,'Olímpico de Pozuelo Rugby','Madrid','azul','blanco',2),(13,'Eibar RT','Eibar','rojo','azul',2),(14,'PRB Flor de Escocia UBU','Burgos','naranja','negro',2),(15,'Turia-Les Abelles','Valencia','verde','amarillo',2),(16,'CR Atlético Portuense','Puerto de Santa María','amarillo','verde',2),(17,'Club Rugby Málaga','Málaga','morado','verde',3),(18,'Jaén Rugby','Jaén','verde',NULL,3),(19,'BUC','Barcelona','negro',NULL,3),(20,'CE INEF Lleida','Lleida','verde','amarillo',3),(21,'Sanse Scrum RC','Madrid','rojo','azul',3),(22,'Universitario de Bilbao Rugby','Bilbao','azul','rojo',3),(23,'La Única RT','Pamplona','verde','blanco',3),(24,'CAU Valencia','Valencia','rojo','negro',3),(25,'CR UCV','Alicante','verde','blanco',3);
/*!40000 ALTER TABLE `Teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `surname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'Marta','Chacartegui','marta@email.com','mypass'),(2,'Pepi','Marquez','pepi@email.com','herpass'),(3,'Elena','Gomez','elena@email.com','admin1234'),(4,'Prueba1','Prueba1','prueba@prueba.com','prueba1'),(5,'Prueba2','Prueba2','prueba2@prueba.com','Prueba2');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-27 10:40:37
