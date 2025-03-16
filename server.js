import express from "express";
const app = express()
const port = 8080

//db
import dataBaseConnection from "./databases/expensedb.js";
import expenserouter from "./routes/expenseRoutes.js";
dataBaseConnection()

//json
app.use(express.json());

//cors
import cors from 'cors'
app.use(cors())



//1st page
app.post('/', (req, res)=>{
	res.status(200).json({msg:`everything ok ${req.body.test}`, success:true})
})

app.use('/expense', expenserouter)

app.listen(port, ()=>{
	console.log(`server is running at http://localhost:${port}`)
})