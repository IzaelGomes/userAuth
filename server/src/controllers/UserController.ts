import { Request, Response } from "express";
import { user } from "../repositories/IuserRepository";
import { UserRepository } from "../repositories/UserRepository";

class UserController {
  async create(request: Request, response: Response) {
    try {
      const userRepository = new UserRepository();

      const { name, username, password } = request.body;

      //console.log(request.body)

      const existUser = await userRepository.findOne(username);

      //console.log(existUser)

      if (existUser?.username) {
        return response.status(400).json({ message: "User already exists" });
      }

      const user = await userRepository.save(request.body);

      return response.status(201).json(user);
    } catch (err) {
      return response.status(400).json({
        err: err.message,
      });
    }
  }
}

export { UserController };
