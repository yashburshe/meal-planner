import express from "express";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import ingredientRouter from "./routes/ingredients";
import mealRouter from "./routes/meals";
import searchRouter from "./routes/search";

const app = express();
const port = process.env.PORT;

console.log(process.env.CLIENT_URL);

app.use(cors({
    origin: [process.env.CLIENT_URL!]
}));

app.use(express.json());

mongoose.connect(process.env.MONGO_URI!)

app.use('/ingredients', ingredientRouter);
app.use('/meals', mealRouter);
app.use('/search', searchRouter)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});