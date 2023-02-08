import { Ipermission, permissions } from "./IpermissionRepository";
import { prisma } from "../database/prisma";

import { IRole, role } from "./IRolesRepository";
import { PermissionRepository } from "./PermissionRepository";

import {} from 'cr'

class RoleRepossitory implements IRole {

  async save({ name, description, permission }: role): Promise<role> {

    const new_id = 

    const permissionRepository = new PermissionRepository();

   // const existedPermission = permissionRepository.findById()
    
    const createRole = await prisma.role.create({
      data: {
        name,
        description,
        permissions:{
          connect:permission.map(item =>({
            rolesId_permissionsId: {
              rolesId:"",
              permissionsId:item
            }
          }))
      },
    

    
    });

   

    const savedRole = { 
      id: createRole.id,
      name: createRole.name,
      description: createRole.description,
      created_at: createRole.created_at,
    };

    console.log("produto salvo" + savedRole);

    return savedRole;
  }

  async findOne(name: string): Promise<role | null> {
    const existedRole = await prisma.role.findFirst({
      where: {
        name,
      },
    });

    return existedRole;
  }


}

export { RoleRepossitory };
