export type product = {
  name: string;
  description: string;
  created_at: Date;
  id: string;
};

export interface IProducts {
  save(data: product): Promise<product>;
  findOne(username: string): Promise<product | undefined | null>;
  findId(id: string): Promise<product | undefined | null>;
  find(): Promise<product | null>;
}
