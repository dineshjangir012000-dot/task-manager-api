import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connetionDb = await mongoose.connect(process.env.MONGO_URL);
        console.log("databe is connected")
    } catch (error) {
        console.log("database connection error",error)
        process.exit(1);
    }
}
export default connectDb;
