import { Router } from "express";
import { UserController } from "./controllers/UserController";
import { SessionContoller } from "./controllers/SessionController";
import { PermissionController } from "./controllers/PermissionController";
import { RoleController } from "./controllers/RoleController";
import { ProductController } from "./controllers/ProductController";

import {is} from '../src/middlewares/permission'

const router = Router();

const userController = new UserController();
const userSession = new SessionContoller();
const permissions = new PermissionController();
const role = new RoleController();
const product = new ProductController()

router.post("/users", userController.create);
router.post("/sessions", userSession.create);
router.post("/permission", permissions.create);
router.post("/roles", role.create);
router.get("/users", userController.findUser);

router.post("/products",is(['ROLE_ADMIN']), product.create)
router.get("/products", is(['ROLE_ADMIN', 'ROLE_USER' ]), product.index)
router.get("/products/:id", is(['ROLE_ADMIN', 'ROLE_USER' ]),  product.show)

export { router };
