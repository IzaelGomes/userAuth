import { Role } from "@prisma/client";
import { permissions } from "./IpermissionRepository";

export type role = {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  permission: string[];
};

/*export type findIdRole = {
  Roles?: role[]
};*/


export interface IRole {
  save(data: role): Promise<role>;
  findOne(name: string): Promise<role | null>;
  findAllById(id:any): Promise<role | undefined>
  findAllRoles(): Promise<role | undefined>
}
