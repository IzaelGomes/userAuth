import { prisma } from "../database/prisma";
import { IProducts, product } from "./IproductRepository";

class ProductRepository implements IProducts {
  async save({ name, description }: product): Promise<product> {
    const createProduct = await prisma.products.create({
      data: {
        name,
        description,
      },
    });
    return createProduct;
  }

  findOne(username: string): Promise<product | null | undefined> {
    throw new Error("Method not implemented.");
  }

  async find(): Promise<product | null> {
    const products = await prisma.products.findMany();

    return products;
  }

  async findId(id: string): Promise<product | null | undefined> {
    const user = await prisma.products.findUnique({
      where: {
        id,
      },
    });

    console.log(user);

    return user;
  }
}

export { ProductRepository };
