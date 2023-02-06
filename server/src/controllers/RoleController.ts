import { Request, Response } from "express";
import { PermissionRepository } from "../repositories/PermissionRepository";
import { RoleRepossitory } from "../repositories/RoleRepository";

class RoleController {
  async create(request: Request, response: Response) {
    try {
      const data = request.body;

      const roleRepository = new RoleRepossitory()

      const existRole = await roleRepository.findOne(data.name);

      if (existRole) {
        return response.status(400).json({
          error: "Permission already existed",
        });
      }

      const role = await roleRepository.save(data);

      console.log(data)


      

      return response.status(200).json(role);
    } catch (err) {
      return response.status(400).json({
        err: err.message,
      });
    }
  }
}

export { RoleController };
