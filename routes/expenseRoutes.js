import express from "express";
import { addExpense, getExpense } from "../controllers/expenseControllers.js";
const router = express.Router()

router.get('/getexpense', getExpense)
router.post('/addexpense', addExpense)


export default router