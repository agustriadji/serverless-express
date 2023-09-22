-- CreateTable
CREATE TABLE `movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(150) NOT NULL,
    `description` VARCHAR(250) NOT NULL,
    `rating` DOUBLE NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `status` ENUM('active', 'inactive') NOT NULL DEFAULT 'active',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `movie_title_key`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
