import mongoose from "mongoose";

const dataBaseConnection = async ()=>{
	try {
		await mongoose.connect('mongodb://localhost:27017/')
		console.log('connected to mongodb')

	} catch (error) {
		console.log(error.message)
	}
}
export default dataBaseConnection