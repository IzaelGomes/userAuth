import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";
import { RoleRepossitory } from "../repositories/RoleRepository";
import * as dotenv from 'dotenv'
dotenv.config({path:"../../.env"})

class SessionContoller {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    const userRepository = new UserRepository();
    const roleRepository = new RoleRepossitory()

    const userExisted = await userRepository.findOne(username);

    if (!userExisted) {
      return response.status(400).json({ error: "User not found !" });
    }

    

    const foundRoles = await roleRepository.findAllById(
      userExisted.UserRoles.map((res) => {
        return res.roleId;
      })
    );

    const userRoles = foundRoles.map((roles) => roles.name);

    const user = {
      id:userExisted.id,
      name:userExisted.name, 
      username:userExisted.username, 
      roles: userRoles
    }

    console.log(user)

    const matchPassword = await compare(password, userExisted.password);

    if (!matchPassword) {
      return response
        .status(400)
        .json({ error: "User or Password incorrect  !" });
    }

    const token = sign({}, "93eea6a2c12628b3a3b7618f6882c912" , {
      subject: userExisted.id,
      expiresIn: "1d",
    });

    return response.json({
      token,
      user,
    });
  }
}

export { SessionContoller };
