import { prisma } from "../database/prisma";

async function salvaPermission() {
  const dados = {
    roleId: "903e79e2-05c7-4165-a9f5-3440e16ef75f",
    permissionId: "b3e7ef8c-bf1c-4dce-b79b-c48b2486d936",
  };

  const insert = await prisma.permissionsRoles.create({
    data:{
        rolesId:dados.roleId,
        permissionsId: dados.permissionId
    }
  });

  return insert
}

salvaPermission();
