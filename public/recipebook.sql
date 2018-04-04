-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2018 at 06:50 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipebook`
--

-- --------------------------------------------------------

--
-- Table structure for table `recipes`
--

CREATE TABLE `recipes` (
  `id` int(5) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `image` varchar(50) NOT NULL,
  `ingredients` varchar(1000) NOT NULL,
  `rating` int(11) NOT NULL DEFAULT '0',
  `steps` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipes`
--

INSERT INTO `recipes` (`id`, `title`, `description`, `image`, `ingredients`, `rating`, `steps`) VALUES
(1, 'Chicken Breast with peppers', 'Tasty and tender', 'food.jpeg', 'Ingredients: Chicken Breast, lime, red peppers', 8, 'Steps: 1.preheat oven to 500 F 2. Season chicken'),
(2, 'Classic Taco', 'Feel the classic mexican dish', 'food2.jpg', 'Ingredients: Ground beef, Tomato, lettuce...', 7, 'Steps: 1.Cook ground beef 2. Season beef'),
(3, 'New York style Burgers and fries', 'Feel the taste of new york', 'food3.jpg', 'Ingredients: Beef patty, potatoes, cheese...', 7, 'Steps: 1.preheat pan 2. Cut onions to thin slice'),
(4, 'Strawberry Pancakes', 'tasty deserts', 'food4.jpg', 'Ingredients: Strawberries, Pancake batter...', 10, 'Steps: 1.preheat pan 2. Mix batter...'),
(5, 'Thai Springrolls', 'crunchy and savory ', 'food5.jpg', 'Ingredients: Ground beef, Lettuce...', 0, 'Steps: 1.Cook ground beef 2. Season beef with salt...'),
(6, 'New York style Nachos', 'Taste new york ', 'food6.jpg', 'Ingredients: Nacho chips, cheese, green olives...', 10, 'Steps: 1.Layout nachos 2. cover in cheese and...'),
(7, 'Classic Pizza', 'classic pizza for class people', 'food7.jpg', 'Ingredients: Flour, pepperoni, vegetables...', 6, 'Steps: 1.preheat oven to 500 F 2. rollout dough'),
(8, 'Breakfast eggs, bacons, and pancakes', 'breakfast for the actives', 'food8.jpg', 'Ingredients: Eggs, Bacons, fruits...', 10, 'Steps: 1.Cook eggs and bacon 2. chop fruits, fry pankcakes...'),
(9, 'New York style Omlets', 'tasty breakfast ', 'food9.jpg', 'Ingredients: Eggs, Ham, cheese...', 8, 'Steps: 1. cut up ham 2. cut cheese, fry up the eggs...');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`username`, `email`, `password`) VALUES
('khnsamnd', 'asfdsfd', 'asdfad'),
('Virack', 'kkfk@gmail.com', '123456'),
('ben', 'nagnstarkkk@gmail.co', '1234'),
('rew', 'rew', 'rew'),
('undefined', 'undefined', 'undefined');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `recipes`
--
ALTER TABLE `recipes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `recipes`
--
ALTER TABLE `recipes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
