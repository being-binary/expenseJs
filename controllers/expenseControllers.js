import expenseCollection from '../model/expenseCollection.js'
import mongoose from 'mongoose'

const getExpense = async(req, res)=>{
	try {
			// Getting all data from server
			const expense = await expenseCollection.find({})
			// Sending a JSON response with data
			res.status(200).json({
					msg:`succcess`,
					success: true,
					expense
			})

	} catch (error) {
			//Sending error response with message
			res.status(500).json({
					msg:`${error.message}`,
					success: false
				})
	}
}

const addExpense = async (req, res) => {
	try {
			const { expense } = req.body;
			// Validate input
			if (!expense || !expense.expense || !expense.price || !expense.date) {
					return res.status(400).json({
							msg: "Invalid expense data provided",
							success: false
					});
			}

			// Insert the expense into the collection
			const ack = await expenseCollection.insertOne(expense);
			// Check if the insertion was successful
			if (ack) {
					res.status(201).json({
							msg: "Expense added successfully",
							success: true
					});
			} else {
					res.status(400).json({
							msg: "Failed to add expense",
							success: false
					});
			}
	} catch (error) {
			// Log error for debugging if needed
			console.error("Error adding expense:", error);

			// Return a generic error response
			res.status(500).json({
					msg: `Something went wrong: ${error.message}`,
					success: false
			});
	}
};


export {
	addExpense,
	getExpense,
}