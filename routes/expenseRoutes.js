import express from "express";
import { addExpense } from "../controllers/expenseControllers.js";
const router = express.Router()

router.post('/addexpense',addExpense)

export default router