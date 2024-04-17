-- CreateTable
CREATE TABLE `Funcionario` (
    `matricula` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `salario` DOUBLE NOT NULL,
    `endereco` VARCHAR(191) NOT NULL,
    `idDepartamento` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Funcionario_matricula_key`(`matricula`),
    PRIMARY KEY (`matricula`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Departamento` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Departamento_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Funcionario` ADD CONSTRAINT `Funcionario_idDepartamento_fkey` FOREIGN KEY (`idDepartamento`) REFERENCES `Departamento`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
