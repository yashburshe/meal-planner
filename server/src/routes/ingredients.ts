import express from "express";
import Ingredient from "../schemas/ingredientSchema";

const ingredientRouter = express.Router();

ingredientRouter.get("/", async (req, res) => {
  const ingredients = await Ingredient.find();
  res.json(ingredients);
});

ingredientRouter.get("/:id", async (req, res) => {

  const ingredientId = req.params.id;

  const ingredient = await Ingredient.findById(ingredientId)

  res.json(ingredient);
});

ingredientRouter.post("/", async (req, res) => {
  try {
    const {
      name,
      store,
      price,
      servingsPerContainer,
      servingSize,
      calories,
      totalFat,
      saturatedFat,
      transFat,
      cholesterol,
      sodium,
      totalCarbohydrate,
      dietaryFiber,
      totalSugars,
      addedSugars,
      protein,
      vitaminD,
      calcium,
      iron,
      potassium,
    } = req.body;

    const newIngredient = new Ingredient({
      name,
      store,
      price,
      servingsPerContainer,
      servingSize,
      calories,
      totalFat,
      saturatedFat,
      transFat,
      cholesterol,
      sodium,
      totalCarbohydrate,
      dietaryFiber,
      totalSugars,
      addedSugars,
      protein,
      vitaminD,
      calcium,
      iron,
      potassium,
    });

    const savedIngredient = await newIngredient.save();
    res.status(201).json(savedIngredient);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
});

export default ingredientRouter;
