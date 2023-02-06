-- CreateTable
CREATE TABLE `PermissionsRoles` (
    `rolesId` VARCHAR(191) NOT NULL,
    `permissionsId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`rolesId`, `permissionsId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PermissionsRoles` ADD CONSTRAINT `PermissionsRoles_rolesId_fkey` FOREIGN KEY (`rolesId`) REFERENCES `role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PermissionsRoles` ADD CONSTRAINT `PermissionsRoles_permissionsId_fkey` FOREIGN KEY (`permissionsId`) REFERENCES `permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
