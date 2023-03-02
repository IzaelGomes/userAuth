


export type role = {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  
};

export type Createrole = {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  permission:string[];
  
};




export interface IRole {
  save(data: role): Promise<Createrole>;
  findOne(name: string): Promise<role | null>;
  findAllById(id:any): Promise<role | undefined>
  findAllRoles(): Promise<role[] | undefined>
}
