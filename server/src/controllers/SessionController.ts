import { compare } from "bcryptjs";
import { Request, Response } from "express";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";

class SessionContoller {
  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    const userRepository = new UserRepository();

    const userExisted = await userRepository.findOne(username);

    if (!userExisted) {
      return response.status(400).json({ error: "User not found !" });
    }

    const matchPassword = await compare(password, userExisted.password);

    if (!matchPassword) {
      return response
        .status(400)
        .json({ error: "User or Password incorrect  !" });
    }

    const token = sign({}, "93eea6a2c12628b3a3b7618f6882c912", {
      subject: userExisted.id,
      expiresIn: "1d",
    });

    return response.json({
      token,
      userExisted,
    });
  }
}

export { SessionContoller };
