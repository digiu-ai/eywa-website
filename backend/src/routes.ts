import { Router } from "express";
import * as itemController from "./controllers/itemController";

const router = Router();

router.get("/", (req, res) => res.send("Hello World"));

// Item routes
router.get("/items/", itemController.getAllItems);
router.get("/items/:id", itemController.getItemById);
router.post("/items/", itemController.createItem);
router.put("/items/:id", itemController.updateItem);
router.delete("/items/:id", itemController.deleteItem);

export { router };
