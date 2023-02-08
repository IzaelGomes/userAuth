import { Ipermission, permissions } from "./IpermissionRepository";
import { prisma } from "../database/prisma";

class PermissionRepository implements Ipermission {
  
  async save({  name, description }: permissions): Promise<permissions> {
    const createPermission = await prisma.permissions.create({
      data: {
        name,
        description,
      },
    });

    const savedPermisson = {
      id: createPermission.id,
      name: createPermission.name,
      description: createPermission.description,
      created_at: createPermission.created_at,
    };

    console.log("produto salvo" + savedPermisson);

    return savedPermisson;
  }
  async findOne(name: string): Promise<permissions | null> {
    const existedPermission = await prisma.permissions.findFirst({
      where: {
        name,
      },
    });

    return existedPermission;
  }

  /*async findById(id: string[]): Promise<permissions | null> {
    const existedPermission = await prisma.permissions.findFirst({
        where: {
          id,
        },
      });
  
      return existedPermission;
    }*/
}

export { PermissionRepository };
