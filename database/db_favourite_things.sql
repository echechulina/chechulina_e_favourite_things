-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 16, 2020 at 04:27 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_favourite_things`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_things`
--

CREATE TABLE `tbl_things` (
  `ID` int(11) NOT NULL,
  `title` varchar(20) NOT NULL,
  `image` varchar(20) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_things`
--

INSERT INTO `tbl_things` (`ID`, `title`, `image`, `description`) VALUES
(1, 'Painting', 'painting.jpg', 'Drawing is one of the most challenging, amazing and interesting activities for me. Painting is a long process that requires attention, patience, mood and skill development. Each of my paintings is a challenge to myself, this is an immersion in the topic and a thorough study of details. I am happy and filled with the energy of creativity when I paint.'),
(2, 'Postcards', 'postcard.jpg', 'For many years I have been interested in collecting postcards. The subject of my attention is unusual drawings and fonts. I am happy to bring atypical travel postcards from my travels, which have accumulated over 200!'),
(3, 'Board games', 'game.jpeg', 'Board games are a separate chapter of my life, which is filled with vivid emotions of joy from victory and disappointment from defeat. Logic, associative, quests, arcades - I love them all! And beautiful, unusual graphics make my love even stronger!');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_things`
--
ALTER TABLE `tbl_things`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_things`
--
ALTER TABLE `tbl_things`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
