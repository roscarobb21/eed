-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 15, 2021 at 08:16 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eed`
--

-- --------------------------------------------------------

--
-- Table structure for table `anunturi`
--

CREATE TABLE `anunturi` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `text` varchar(255) COLLATE utf32_romanian_ci NOT NULL,
  `link` varchar(255) COLLATE utf32_romanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_romanian_ci;

--
-- Dumping data for table `anunturi`
--

INSERT INTO `anunturi` (`id`, `data`, `text`, `link`) VALUES
(1, '2020-11-12', 'Burse aprobate de Consiliul Facultatii', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1266'),
(2, '2020-11-16', ' Activitati in sprijinul studentilor din anul I', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1267'),
(3, '2020-11-18', 'Continental Technical Show - 11 decembrie 2020', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1268'),
(4, '2020-11-27', 'Distribuire tablete/ laptopuri anii II si III, licenta', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1270'),
(5, '2020-12-08', 'Activitati remediale anul I - ROSE_MASI', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1272'),
(6, '2021-01-06', 'SUBVENTIE CAZARE 2020-2021 - Sem II', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1273'),
(7, '2021-01-08', 'Programare colocvii, examene iarna, grupa B', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1274'),
(8, '2021-01-08', 'Programarea colocviilor, examenelor, iarna, GRUPA A', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1275'),
(9, '2021-01-12', 'Programarea colocvii/examene - actualizata', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1276');

-- --------------------------------------------------------

--
-- Table structure for table `munca`
--

CREATE TABLE `munca` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `text` varchar(255) COLLATE utf32_romanian_ci NOT NULL,
  `link` varchar(255) COLLATE utf32_romanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_romanian_ci;

--
-- Dumping data for table `munca`
--

INSERT INTO `munca` (`id`, `data`, `text`, `link`) VALUES
(8, '2020-07-09', 'junior Mobile App Developers - IMS MAXIMS', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1213'),
(9, '2020-08-25', '	\r\nProgramatori ++/ Computer Voice Systems', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1231'),
(10, '2020-11-26', 'Programator C# / ECOM DIGITAL SRL', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1269'),
(11, '2020-11-27', 'SQL Developer / SC TRUTZI SRL', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1271');

-- --------------------------------------------------------

--
-- Table structure for table `practica`
--

CREATE TABLE `practica` (
  `id` int(11) NOT NULL,
  `data` date NOT NULL,
  `text` varchar(255) COLLATE utf32_romanian_ci NOT NULL,
  `link` varchar(255) COLLATE utf32_romanian_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32 COLLATE=utf32_romanian_ci;

--
-- Dumping data for table `practica`
--

INSERT INTO `practica` (`id`, `data`, `text`, `link`) VALUES
(5, '2019-07-10', 'Internship_Software_Developer_Antenna_International', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1103'),
(6, '2020-03-11', 'Practica de vara la Continental Iasi/Sibiu/Timsioara', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1171'),
(7, '2020-03-17', 'Internship de vara la ASSIST', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1174'),
(8, '2020-06-10', 'Practica de vara la ORSAM Continental Iasi', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1202'),
(9, '2020-07-06', 'Practica de vara - SIDEM - cariera industria auto', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1209'),
(10, '2020-07-06', 'PentaStagiu online', 'http://www.eed.usv.ro/news/modules.php?name=News&file=article&sid=1212');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `anunturi`
--
ALTER TABLE `anunturi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `munca`
--
ALTER TABLE `munca`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `practica`
--
ALTER TABLE `practica`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `anunturi`
--
ALTER TABLE `anunturi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `munca`
--
ALTER TABLE `munca`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `practica`
--
ALTER TABLE `practica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
