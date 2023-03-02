import { Ipermission, permissions } from "./IpermissionRepository";
import { prisma } from "../database/prisma";

import { Createrole, IRole, role } from "./IRolesRepository";

class RoleRepossitory implements IRole {
  async save({ name, description, permission }: Createrole): Promise<Createrole> {
    const createRole = await prisma.role.create({
      data: {
        name,
        description,
        permissions: {
          createMany: {
            data: permission.map((item) => ({
              permissionsId: item,
            })),
          },
        },
      },
    });

    const savedRole = {
      id: createRole.id,
      name: createRole.name,
      description: createRole.description,
      created_at: createRole.created_at,
      permission,
    };

    return savedRole;
  }

  async findAllRoles(): Promise<role[] | undefined> {
    const roles = await prisma.role.findMany({
      include:{
        permissions:true
      }
    });

    return roles;
  }

  async findOne(name: string): Promise<role | null> {
    const existedRole = await prisma.role.findFirst({
      where: {
        name,
      },
    });

    return existedRole;
  }

  async findAllById(id: any): Promise<any | undefined> {
    const roles = await prisma.role.findMany({
      where: {
        id: {
          in: id,
        },
      },
    });

    return roles;
  }
}

export { RoleRepossitory };
