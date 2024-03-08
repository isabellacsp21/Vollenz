-- CreateTable
CREATE TABLE `dados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo_Sangue` VARCHAR(5) NOT NULL,
    `Especificacao` VARCHAR(50) NOT NULL,
    `Estado` VARCHAR(50) NOT NULL,
    `Altura` FLOAT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pesos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `valor` VARCHAR(5) NOT NULL,
    `data_gravacao` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
