-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.28-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for fortest_xsis
DROP DATABASE IF EXISTS `fortest_xsis`;
CREATE DATABASE IF NOT EXISTS `fortest_xsis` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `fortest_xsis`;

-- Dumping structure for table fortest_xsis.movie
DROP TABLE IF EXISTS `movie`;
CREATE TABLE IF NOT EXISTS `movie` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `description` varchar(250) NOT NULL,
  `rating` double NOT NULL,
  `image` varchar(191) NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'active',
  `created_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updated_at` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `movie_title_key` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table fortest_xsis.movie: ~2 rows (approximately)
REPLACE INTO `movie` (`id`, `title`, `description`, `rating`, `image`, `status`, `created_at`, `updated_at`) VALUES
	(1, 'Pengabdi Setan 2 Comunion', 'adalah sebuahh film horor indonesia tahun 2022 yang disutradarai dan ditulis oleh Joko Anwar sebagai sekuel tahun 2017, Pengabdi Setan.', 7, '', 'active', '2023-09-22 16:52:36.185', '2023-09-22 16:52:36.185'),
	(2, 'Pengabdi Setan', 'adalah sebuahh film horor indonesia tahun 2017 yang disutradarai dan ditulis oleh Joko Anwar', 8, '', 'active', '2023-09-22 16:52:36.185', '2023-09-22 16:52:36.185'),
	(3, 'Forest Gump', 'this description movies', 9, 'http:\\localhost:3000\\public\\movie-resources\\WhatsApp Image 2023-05-26 at 17.16.32.jpg', 'inactive', '2023-09-22 18:24:48.062', '2023-09-22 18:45:20.616');

-- Dumping structure for table fortest_xsis._prisma_migrations
DROP TABLE IF EXISTS `_prisma_migrations`;
CREATE TABLE IF NOT EXISTS `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) unsigned NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table fortest_xsis._prisma_migrations: ~1 rows (approximately)
REPLACE INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
	('8760ebe7-3ece-48fe-bea8-50d93211ecc3', '8c3b0701eacf7e358b580d5ee135d67545cc4cf48f71de39fff2cb7f0581ac51', '2023-09-22 16:52:34.790', '20230922165234_create_movies', NULL, NULL, '2023-09-22 16:52:34.781', 1);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
