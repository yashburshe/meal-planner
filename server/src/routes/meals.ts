import express from "express";
import Meal from "../schemas/mealSchema";

const mealRouter = express.Router();

mealRouter.get("/", async (req, res) => {
  const meals = await Meal.find().populate("ingredients.ingredient");
  console.log(meals);
  res.json(meals);
});

mealRouter.get("/:id", async (req, res) => {
  try {
    const mealId = req.params.id;
    console.log(mealId);
    const meal = await Meal.findById(mealId).populate("ingredients.ingredient");
    console.log(meal)
    if (!meal) {
      res.status(404).json({ error: "Meal not found" });
      return;
    }

    const totals = await meal.calculateNutritionAndPrice();
    const mealWithTotals = { ...meal.toObject(), totals };

    res.json(mealWithTotals);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

mealRouter.post("/", async (req, res) => {
  try {
    const { name, notes, ingredients } = req.body;

    console.log(req.body);

    const newMeal = new Meal({
      name,
      notes,
      ingredients,
    });

    const savedMeal = await newMeal.save();
    res.status(201).json(savedMeal);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default mealRouter;
