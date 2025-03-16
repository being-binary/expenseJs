import mongoose from "mongoose";

const dateSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true }
});

const expenseSchema = new mongoose.Schema({
	expense: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: dateSchema, required: true }
},{timestamps:true})
const Expense = mongoose.model('Expense',expenseSchema)

export default Expense