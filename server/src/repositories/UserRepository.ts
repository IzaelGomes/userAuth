import { Iusers, user } from "./IuserRepository";
import { prisma } from "../database/prisma";
import { hash } from "bcryptjs";

class UserRepository implements Iusers {
  async save({ name, username, password }: user): Promise<user> {
    
    const passwordHashed = await hash(password, 8);

    const createdUser = await prisma.user.create({
      data: {
        name,
        username,
        password: passwordHashed,
      },
    });

    return createdUser;
  }

  async findOne(username: string): Promise<user | undefined | null> {
    const findUserExisted = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    return findUserExisted;
  }
}

export { UserRepository };
