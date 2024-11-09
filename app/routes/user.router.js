import express from "express";
import {
  saveUser,
  getUsers,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", saveUser);
router.get("/all-users", getUsers);
router.delete("/:id", deleteUser);

export default router;
