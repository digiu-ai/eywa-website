import { Router } from "express";
import * as itemController from "./controllers/langController";

const router = Router();

router.get("/", (req, res) => res.send("Backend is alive"));

// Lang routes
router.get("/langs/", itemController.getAllLangs);
router.get("/langs/:id", itemController.getLangById);
router.post("/langs/", itemController.createLang);
router.put("/langs/:id", itemController.updateLang);
router.delete("/langs/:id", itemController.deleteLang);

export { router };
