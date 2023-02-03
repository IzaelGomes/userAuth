


export type user ={
    name:string;
    username:string;
    password:string;
    id:string
}

export interface Iusers{
    save(data:user): Promise<user>
}