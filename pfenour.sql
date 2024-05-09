-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 09 mai 2024 à 21:01
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `pfenour`
--

-- --------------------------------------------------------

--
-- Structure de la table `contacts`
--

CREATE TABLE `contacts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `companyName` varchar(191) NOT NULL,
  `mail` varchar(191) NOT NULL,
  `message` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `forms`
--

CREATE TABLE `forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `companyName` varchar(191) NOT NULL,
  `listeCritere` varchar(191) NOT NULL,
  `url` varchar(255) NOT NULL,
  `debutDate` date NOT NULL,
  `expirationDate` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `forms`
--

INSERT INTO `forms` (`id`, `companyName`, `listeCritere`, `url`, `debutDate`, `expirationDate`, `created_at`, `updated_at`) VALUES
(13, 'Perspective', 'Criterion 1, Criterion 2, Criterion 4, Criterion 5', 'http://localhost:5173/client/ratingform/Criterion%201%2C%20Criterion%202%2C%20Criterion%204%2C%20Criterion%205/Perspective/2024-04-12/db3db33d-40f1-4aaf-92d6-0db6885074b4', '2024-04-14', '2024-04-12', '2024-04-14 09:18:54', '2024-04-14 09:18:54'),
(14, 'Perspective', 'Criterion 1, Criterion 5, Criterion 3, Criterion 6', 'http://localhost:5173/client/ratingform/Criterion%201%2C%20Criterion%205%2C%20Criterion%203%2C%20Criterion%206/Perspective/2024-04-12/70908bb6-f312-4a05-8018-7f649e9e00f6', '2024-04-14', '2024-04-12', '2024-04-14 09:19:07', '2024-04-14 09:19:07'),
(24, 'ITNextSolution', 'Criterion 1,  Criterion 2,  Criterion 4,  Criterion 5,  Criterion 3,  Criterion 6', 'http://localhost:5173/client/ratingform/Criterion%201%2C%20%20Criterion%202%2C%20%20Criterion%204%2C%20%20Criterion%205%2C%20%20Criterion%203%2C%20%20Criterion%206/ITNextSolution/2024-04-15/76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031', '2024-04-15', '2024-04-15', '2024-04-15 12:34:40', '2024-04-15 15:02:32'),
(28, 'perspective', 'Criterion 1, Criterion 3, Criterion 5', 'http://localhost:5173/client/ratingform/Criterion%201%2C%20Criterion%203%2C%20Criterion%205/perspective/2024-04-18/b13d7543-e9d0-4998-bda7-4e4bc6338196', '2024-04-17', '2024-04-18', '2024-04-17 19:54:19', '2024-04-17 19:54:19'),
(29, 'For Commerce', 'Criterion 1,  Criterion 2,  Criterion 4,  Criterion 5', 'http://localhost:5173/client/ratingform/Criterion%201%2C%20%20Criterion%202%2C%20%20Criterion%204%2C%20%20Criterion%205/For Commerce/2024-04-25/329e721f-91c2-4fda-9d05-fda925c56843', '2024-04-26', '2024-04-25', '2024-04-26 17:23:08', '2024-04-26 17:25:43'),
(30, 'For Commerce', 'Qualité des produits, Fiabilité des processus de production, Compétence et expertise', 'http://localhost:5173/client/ratingform/Qualit%C3%A9%20des%20produits%2C%20Fiabilit%C3%A9%20des%20processus%20de%20production%2C%20Comp%C3%A9tence%20et%20expertise/For Commerce/2024-04-25/138acbd4-0f44-4a15-8961-94471e946821', '2024-04-26', '2024-04-25', '2024-04-26 18:11:14', '2024-04-26 18:11:14'),
(31, 'For Commerce', 'Qualité des produits, Propreté et hygiène', 'http://localhost:5173/client/ratingform/Qualit%C3%A9%20des%20produits%2C%20Propret%C3%A9%20et%20hygi%C3%A8ne/For Commerce/2024-04-25/39d8dc6b-f9cd-496f-8eb3-0839e309ce26', '2024-04-26', '2024-04-25', '2024-04-26 18:16:53', '2024-04-26 18:16:53'),
(32, 'For Commerce', 'Qualité des produits, Propreté et hygiène', 'http://localhost:5173/client/ratingform/Qualit%C3%A9%20des%20produits%2C%20Propret%C3%A9%20et%20hygi%C3%A8ne/For Commerce/2024-04-25/e9aafb86-524b-4e92-b711-7f309a452ab5', '2024-04-26', '2024-04-25', '2024-04-26 18:17:49', '2024-04-26 18:17:49');

-- --------------------------------------------------------

--
-- Structure de la table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_03_15_231230_add_expires_at_column_to_personal_access_tokens_table', 1),
(6, '2024_04_12_001427_create_forms', 2),
(7, '2024_04_12_092738_create_resultat_forms', 3),
(8, '2024_04_12_103436_create_resultat_forms', 4),
(9, '2024_04_17_205107_create__nours_table', 5),
(10, '2024_05_09_174636_create_contacts_table', 6);

-- --------------------------------------------------------

--
-- Structure de la table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`, `expires_at`) VALUES
(37, 'App\\Models\\User', 3, 'perspective@gmail.com_UserToken', '3019e61e19c8d1eef70cc68258d91650897b817efa5af9b59dc6462c4e6c0c63', '[\"server:user\"]', '2024-04-14 09:19:10', '2024-04-14 09:18:36', '2024-04-14 09:19:10', NULL),
(63, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', 'f33734be4abf2abd1507fdff2b54a2623df1c0b3b5da78d458f8ffafcea4dd07', '[\"server:admin\"]', '2024-04-17 23:08:04', '2024-04-17 19:51:37', '2024-04-17 23:08:04', NULL),
(65, 'App\\Models\\User', 5, 'itnext@gmail.com_UserToken', 'a22207e01a8aa7b0bed6a0fdfec89978ed903d690ef58e24df8069a58371ac89', '[\"server:user\"]', '2024-04-17 19:58:25', '2024-04-17 19:56:40', '2024-04-17 19:58:25', NULL),
(66, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '2688c560dba654d7a7b9cf4ae79dca2717e9cb23bab13d80792227506e6db17b', '[\"server:admin\"]', '2024-04-26 19:10:21', '2024-04-26 15:51:03', '2024-04-26 19:10:21', NULL),
(67, 'App\\Models\\User', 5, 'itnext@gmail.com_UserToken', 'bcafdcc0cfe9ac06cdbc1a92b21a59e9b19ac9b91af5ac4e8ba0d95b9d6dadf1', '[\"server:user\"]', '2024-04-26 16:08:26', '2024-04-26 15:52:13', '2024-04-26 16:08:26', NULL),
(70, 'App\\Models\\User', 6, 'commerce@gmail.com_UserToken', '8ddcca413191436ce8df9a94ae33f4128fc7caffb397231b41b31c4bab5abe62', '[\"server:user\"]', '2024-04-26 18:17:49', '2024-04-26 17:22:47', '2024-04-26 18:17:49', NULL),
(71, 'App\\Models\\User', 5, 'itnext@gmail.com_UserToken', '52edd3867f45b98ef70358745268fdf482fb8dea5892b5adce1c6788f6af5f55', '[\"server:user\"]', '2024-04-26 19:09:08', '2024-04-26 18:38:09', '2024-04-26 19:09:08', NULL),
(72, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '23738e4348e47214045ea96d209d3c3aa21598685777bcfacfc3299f887262cd', '[\"server:admin\"]', '2024-05-09 16:54:47', '2024-05-09 16:41:30', '2024-05-09 16:54:47', NULL);

-- --------------------------------------------------------

--
-- Structure de la table `resultat_forms`
--

CREATE TABLE `resultat_forms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `companyName` varchar(191) NOT NULL,
  `Resultat` varchar(191) NOT NULL,
  `formId` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `resultat_forms`
--

INSERT INTO `resultat_forms` (`id`, `companyName`, `Resultat`, `formId`, `created_at`, `updated_at`) VALUES
(2, 'Iberise', '\"Criterion 1\": 5, \" Criterion 2\": 4, \" Criterion 3\": 5, \" Criterion 4\": 5', 'e59e7502-c626-4830-bd47-51bd4cc3e274', '2024-04-12 08:53:57', '2024-04-12 08:53:57'),
(3, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 4, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:08:41', '2024-04-12 09:08:41'),
(4, 'Iberise', '\"Criterion 7\": 4, \" Criterion 8\": 4, \" Criterion 9\": 5, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:14:22', '2024-04-12 09:14:22'),
(5, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 3, \" Criterion 9\": 4, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:14:29', '2024-04-12 09:14:29'),
(6, 'Iberise', '\"Criterion 7\": 1, \" Criterion 8\": 4, \" Criterion 9\": 3, \" Criterion 10\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:14:36', '2024-04-12 09:14:36'),
(7, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 3, \" Criterion 9\": 4, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:14:42', '2024-04-12 09:14:42'),
(8, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 4, \" Criterion 9\": 4, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:14:49', '2024-04-12 09:14:49'),
(9, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 4, \" Criterion 9\": 5, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:14:55', '2024-04-12 09:14:55'),
(10, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 4, \" Criterion 10\": 5, \" Criterion 9\": 2', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:03', '2024-04-12 09:15:03'),
(11, 'Iberise', '\" Criterion 8\": 3, \" Criterion 9\": 4, \" Criterion 10\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:10', '2024-04-12 09:15:10'),
(12, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 3, \" Criterion 9\": 5, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:16', '2024-04-12 09:15:16'),
(13, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 4, \" Criterion 9\": 5, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:24', '2024-04-12 09:15:24'),
(14, 'Iberise', '\"Criterion 7\": 3, \" Criterion 8\": 5, \" Criterion 9\": 5, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:30', '2024-04-12 09:15:30'),
(15, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 4, \" Criterion 9\": 5, \" Criterion 10\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:37', '2024-04-12 09:15:37'),
(16, 'Iberise', '\"Criterion 7\": 4, \" Criterion 8\": 4, \" Criterion 9\": 4, \" Criterion 10\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:43', '2024-04-12 09:15:43'),
(17, 'Iberise', '\"Criterion 7\": 5, \" Criterion 8\": 5, \" Criterion 9\": 5, \" Criterion 10\": 5', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:51', '2024-04-12 09:15:51'),
(18, 'Iberise', '\"Criterion 7\": 2, \" Criterion 8\": 3, \" Criterion 9\": 5, \" Criterion 10\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:15:57', '2024-04-12 09:15:57'),
(19, 'Iberise', '\" Criterion 8\": 5, \" Criterion 9\": 4, \" Criterion 10\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:16:05', '2024-04-12 09:16:05'),
(20, 'Iberise', '\"Criterion 7\": 5, \" Criterion 10\": 5, \" Criterion 9\": 3, \" Criterion 8\": 4', '4dd6acfb-ef23-4deb-b53e-7077371134d8', '2024-04-12 09:17:38', '2024-04-12 09:17:38'),
(21, 'ITNextSolution', '\"Criterion 5\": 4, \"  Criterion 6\": 5, \"  Criterion 7\": 5, \"  Criterion 8\": 4', 'ad7bf5df-3b78-4c35-b42f-f4254b96908c', '2024-04-15 13:02:06', '2024-04-15 13:02:06'),
(22, 'ITNextSolution', '\"Criterion 5\": 4, \"  Criterion 6\": 5, \"  Criterion 7\": 3, \"  Criterion 8\": 5', 'ad7bf5df-3b78-4c35-b42f-f4254b96908c', '2024-04-15 13:02:12', '2024-04-15 13:02:12'),
(23, 'ITNextSolution', '\"Criterion 5\": 4, \"  Criterion 6\": 5, \"  Criterion 7\": 5, \"  Criterion 8\": 3', 'ad7bf5df-3b78-4c35-b42f-f4254b96908c', '2024-04-15 13:02:21', '2024-04-15 13:02:21'),
(24, 'ITNextSolution', '\"Criterion 5\": 3, \"  Criterion 6\": 5, \"  Criterion 7\": 5, \"  Criterion 8\": 4', 'ad7bf5df-3b78-4c35-b42f-f4254b96908c', '2024-04-15 13:02:27', '2024-04-15 13:02:27'),
(25, 'ITNextSolution', '\"Criterion 5\": 3, \"  Criterion 6\": 5, \"  Criterion 7\": 5, \"  Criterion 8\": 2', 'ad7bf5df-3b78-4c35-b42f-f4254b96908c', '2024-04-15 13:02:34', '2024-04-15 13:02:34'),
(26, 'ITNextSolution', '\"  Criterion 6\": 5, \"  Criterion 7\": 5, \"  Criterion 8\": 5', 'ad7bf5df-3b78-4c35-b42f-f4254b96908c', '2024-04-15 13:02:40', '2024-04-15 13:02:40'),
(27, 'ITNextSolution', '\"Criterion 5\": 3, \"  Criterion 6\": 4, \"  Criterion 7\": 2, \"  Criterion 8\": 5', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:02:47', '2024-04-15 13:02:47'),
(28, 'ITNextSolution', '\"Criterion 5\": 4, \"  Criterion 7\": 5, \"  Criterion 6\": 3, \"  Criterion 8\": 4', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:02:54', '2024-04-15 13:02:54'),
(29, 'ITNextSolution', '\"Criterion 5\": 5, \"  Criterion 6\": 5, \"  Criterion 7\": 4, \"  Criterion 8\": 5', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:03:01', '2024-04-15 13:03:01'),
(30, 'ITNextSolution', '\"Criterion 5\": 4, \"  Criterion 6\": 3, \"  Criterion 7\": 5, \"  Criterion 8\": 3', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:03:07', '2024-04-15 13:03:07'),
(31, 'ITNextSolution', '\"Criterion 5\": 5, \"  Criterion 6\": 3, \"  Criterion 7\": 5', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:03:14', '2024-04-15 13:03:14'),
(32, 'ITNextSolution', '\"Criterion 5\": 4, \"  Criterion 6\": 5, \"  Criterion 7\": 5, \"  Criterion 8\": 2', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:03:20', '2024-04-15 13:03:20'),
(33, 'ITNextSolution', '\"Criterion 5\": 5, \"  Criterion 6\": 5, \"  Criterion 7\": 3, \"  Criterion 8\": 5', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:03:26', '2024-04-15 13:03:26'),
(34, 'ITNextSolution', '\"Criterion 5\": 5, \"  Criterion 6\": 3, \"  Criterion 7\": 5, \"  Criterion 8\": 5', '43d901c1-030e-4f80-b4e9-fe6002030691', '2024-04-15 13:03:34', '2024-04-15 13:03:34'),
(35, 'ITNextSolution', '\"Criterion 1\": 5, \"  Criterion 2\": 4, \"  Criterion 4\": 5, \"  Criterion 5\": 5, \"  Criterion 3\": 4, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:03:59', '2024-04-15 15:03:59'),
(36, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 4\": 3, \"  Criterion 5\": 5, \"  Criterion 6\": 4, \"  Criterion 3\": 4', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:04:07', '2024-04-15 15:04:07'),
(37, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 4\": 4, \"  Criterion 5\": 5, \"  Criterion 3\": 4, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:04:15', '2024-04-15 15:04:15'),
(38, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 4\": 3, \"  Criterion 5\": 5, \"  Criterion 3\": 3, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:04:23', '2024-04-15 15:04:23'),
(39, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 4\": 4, \"  Criterion 5\": 4, \"  Criterion 3\": 5, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:04:30', '2024-04-15 15:04:30'),
(40, 'ITNextSolution', '\"  Criterion 2\": 3, \"  Criterion 4\": 4, \"  Criterion 5\": 3, \"  Criterion 3\": 5, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:04:37', '2024-04-15 15:04:37'),
(41, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 4\": 4, \"  Criterion 5\": 5, \"  Criterion 6\": 5, \"  Criterion 3\": 4', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031$', '2024-04-15 15:04:45', '2024-04-15 15:04:45'),
(42, 'ITNextSolution', '\"Criterion 1\": 5, \"  Criterion 2\": 4, \"  Criterion 4\": 5, \"  Criterion 5\": 5, \"  Criterion 6\": 5, \"  Criterion 3\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031', '2024-04-15 15:06:26', '2024-04-15 15:06:26'),
(43, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 5\": 5, \"  Criterion 3\": 5, \"  Criterion 6\": 3, \"  Criterion 4\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031', '2024-04-15 15:07:07', '2024-04-15 15:07:07'),
(44, 'ITNextSolution', '\"Criterion 1\": 3, \"  Criterion 2\": 5, \"  Criterion 4\": 5, \"  Criterion 3\": 5, \"  Criterion 5\": 4, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031', '2024-04-15 15:07:25', '2024-04-15 15:07:25'),
(45, 'ITNextSolution', '\"  Criterion 2\": 5, \"  Criterion 4\": 4, \"  Criterion 5\": 5, \"  Criterion 3\": 4, \"  Criterion 6\": 5', '76fcf34c-b53e-4dfa-9e7e-7cd2dafb2031', '2024-04-15 15:07:33', '2024-04-15 15:07:33');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `role` varchar(191) NOT NULL,
  `status` varchar(191) DEFAULT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `address` varchar(191) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`id`, `name`, `phone`, `role`, `status`, `email`, `email_verified_at`, `password`, `address`, `image`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'admin', '58178123', 'Admin', 'valide', 'admin@gmail.com', NULL, '$2y$10$RPpbK9IqaG3RFauhc9q7Wu1b39x6azwBXQc7BlrOMGI8OWqxCgavW', NULL, NULL, NULL, '2024-04-07 20:39:23', '2024-04-15 15:54:00'),
(5, 'ITNextSOLUTION', '76564897', 'User', 'valide', 'itnext@gmail.com', NULL, '$2y$10$vlk8nI/rJjkMAwYnuEtPoui0nx2xlPjjkNj5diHO/LwuytsDr.YLi', NULL, NULL, NULL, '2024-04-10 08:30:05', '2024-04-15 15:50:48'),
(6, 'For Commerce', '76543456', 'User', 'valide', 'commerce@gmail.com', NULL, '$2y$10$lyFxwDUrSOiB14y3XzIcBO5bYy2HoiVhF9.d7VRuQHJi9/CuB9/Eq', NULL, NULL, NULL, '2024-04-14 09:04:24', '2024-04-26 17:22:18'),
(7, 'StaticMarke', '22345645', 'User', 'valide', 'static@gmail.com', NULL, '$2y$10$J859tQfIpGHY9mQ.pgAQiOqvb4AA28rqKTM.VzgSYqb5CxnIrFZr6', NULL, NULL, NULL, '2024-04-15 15:55:39', '2024-04-15 15:55:43'),
(8, 'perspective', '34575874', 'User', 'valide', 'perspective@gmail.com', NULL, '$2y$10$WZ9D7wM3F./hcJqN8CY98OcL8BuyM5nfuz/GFludgoR2vbIVIE7Bu', NULL, NULL, NULL, '2024-04-17 19:48:23', '2024-04-17 19:52:01');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Index pour la table `forms`
--
ALTER TABLE `forms`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Index pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Index pour la table `resultat_forms`
--
ALTER TABLE `resultat_forms`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `contacts`
--
ALTER TABLE `contacts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `forms`
--
ALTER TABLE `forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT pour la table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;

--
-- AUTO_INCREMENT pour la table `resultat_forms`
--
ALTER TABLE `resultat_forms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
