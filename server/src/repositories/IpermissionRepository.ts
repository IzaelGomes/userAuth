
export type permissions ={
    name:string;
    description:string;
    created_at: Date;
    id:string;
}

export interface Ipermission{
    save(data: permissions): Promise<permissions>
    findOne(name:string): Promise<permissions | null >
    findById(name:string): Promise<permissions | null >
}