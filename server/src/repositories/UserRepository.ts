import { finduserId, Iusers, user, userRoles } from "./IuserRepository";
import { prisma } from "../database/prisma";
import { hash } from "bcryptjs";

class UserRepository implements Iusers {
  async save({ name, username, password, roles }: user): Promise<user> {
    const passwordHashed = await hash(password, 8);

    const createdUser = await prisma.user.create({
      data: {
        name,
        username,
        password: passwordHashed,
        UserRoles: {
          createMany: {
            data: roles.map((res) => {
              return { roleId: res };
            }),
          },
        },
      },
    });

    const user = {
      id: createdUser.id,
      name: createdUser.name,
      username: createdUser.username,
      password: createdUser.password,
      createdAt: createdUser.created_ate,
      roles: roles,
    };

    return user;
  }

  async findOne(username: string): Promise<user | null> {
    const findUserExisted = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    return findUserExisted;
  }

  async findById(id: string): Promise<any | undefined> {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        UserRoles: true,
      },
    });

    /*console.log(
      "resultado " +
        user?.UserRoles.map((res) => {
          return res.roleId;
        })
    );*/

    return user;
  }
}

export { UserRepository };
