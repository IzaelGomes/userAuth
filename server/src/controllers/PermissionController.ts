import { Request, Response } from "express";
import { PermissionRepository } from "../repositories/PermissionRepository";

class PermissionController {
  async create(request: Request, response: Response) {
    try {
      const data = request.body;

      

      const permissionRepository = new PermissionRepository();

      const existpermission = await permissionRepository.findOne(data.name);

      if (existpermission) {
        return response.status(400).json({
          error: "Permission already existed",
        });
      }

      const permission = await permissionRepository.save(data);

     // console.log("produto da controller" + permission)


      console.log(permission);

      return response.status(200).json(permission);
    } catch (err) {
      return response.status(400).json({
        err: err.message,
      });
    }
  }
}

export { PermissionController };
