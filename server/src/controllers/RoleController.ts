import { Request, Response } from "express";
import { PermissionRepository } from "../repositories/PermissionRepository";
import { RoleRepossitory } from "../repositories/RoleRepository";

class RoleController {
  async create(request: Request, response: Response) {
    try {
      const data = request.body;

      const roleRepository = new RoleRepossitory();

      const existRole = await roleRepository.findOne(data.name);

      if (existRole) {
        return response.status(400).json({
          error: "Permission already existed",
        });
      }

      const role = await roleRepository.save(data);

      console.log(data);

      return response.status(200).json(role);
    } catch (err) {
      return response.status(400).json({
        err: err.message,
      });
    }
  }

  async findAllRoles(resquest:Request, response:Response){

    try{
      const role = new RoleRepossitory()

      const allRoles = await role.findAllRoles()
  
      console.log(allRoles)
  
      return response.json(allRoles)
    }catch(err){
      return response.status(401).json({
        message:err
      })
    }

   


  }
}

export { RoleController };
