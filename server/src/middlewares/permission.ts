import { Request, Response, NextFunction, response } from "express";
import { decode } from "jsonwebtoken";
import { user, finduserId } from "../repositories/IuserRepository";
import { RoleRepossitory } from "../repositories/RoleRepository";
import { UserRepository } from "../repositories/UserRepository";

async function decoder(request: Request): Promise<any | undefined> {
  const authHeader = request.headers.authorization || "";
  const userRepository = new UserRepository();

  const [, token] = authHeader?.split(" ");

  const payload = decode(token);

  const user = await userRepository.findById(String(payload?.sub));

  return user;
}

export function is(role: String[]) {
  const roleAuthorized = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const user = await decoder(request);

    const roleRepository = new RoleRepossitory();

    const foundRoles = await roleRepository.findAllById(
      user.UserRoles.map((res) => {
        return res.roleId;
      })
    );

    const userRoles = foundRoles.map((roles) => roles.name);

    console.log(userRoles);

    const existsRole = userRoles.some((r) => role.includes(r));

    console.log(existsRole);

    if (existsRole) {
      return next();
    }

    return response.status(401).json({ message: "Not authorized" });
  };

  return roleAuthorized;
}
