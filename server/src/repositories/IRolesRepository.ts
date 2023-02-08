import { permissions } from "./IpermissionRepository";


export type role ={
    id:string;
    name:string;
    description:string;
    created_at: Date;
    permission:string[];
}


export interface IRole{
    save(data: role): Promise<role>
    findOne(name:string): Promise<role | null >

}