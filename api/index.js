import express from "express";
import mongoose from "mongoose";
import dotenv, { config } from 'dotenv'
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js"

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('mongodb is connected');
}).catch((err) => {
    console.log(err);
})

const PORT = process.env.PORT || 8000
const app = express();
app.use(express.json());
app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}!!`)
})

app.use('/api/user',userRoutes);
app.use('/api/auth',authRoutes)