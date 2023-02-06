import { Router } from "express";
import { UserController } from './controllers/UserController'
import { SessionContoller } from "./controllers/SessionController";
import { PermissionController } from "./controllers/PermissionController";
import { RoleController } from "./controllers/RoleController";

const router = Router()

const userController = new UserController()
const userSession = new SessionContoller()
const permissions = new PermissionController()
const role = new RoleController()

router.post('/users', userController.create )
router.post('/sessions', userSession.create )
router.post('/permission', permissions.create)
router.post('/roles', role.create)

export {router}