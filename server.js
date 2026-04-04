import express from "express"
import cors from "cors"
import taskRoutes from "./routes/taskRoute.js"
import dotenv from "dotenv";
import connectDb from "./config/db.js"

dotenv.config();


const app = express();

app.use(express.json())
app.use(cors());

app.use("/api/tasks", taskRoutes);

const port = process.env.PORT || 5000;

app.listen(port, async () => {
    try {
        await connectDb();
        console.log(`port is running on the ${port}`)
        } 
    catch (error) {
        console.log(error.message);
    }
})
