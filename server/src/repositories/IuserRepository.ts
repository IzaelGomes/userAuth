export type user = {
  name: string;
  username: string;
  password: string;
  id: string;
  roles: string[];
};

export type finduserId = {
  name: string;
  username: string;
  password: string;
  id: string;
  roles?: userRoles[];
}


export type userRoles = {
  userId: string;
  roleId:string
}

export interface Iusers {
  save(data: user): Promise<user>;
  findOne(username: string): Promise<user | undefined | null>;
  findById(id: string): Promise<userRoles | undefined>;
}
