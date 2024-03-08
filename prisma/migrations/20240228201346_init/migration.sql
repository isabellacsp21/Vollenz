/*
  Warnings:

  - You are about to drop the `pesos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `pesos`;

-- CreateTable
CREATE TABLE `Cadastro` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `datanasc` DATE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
