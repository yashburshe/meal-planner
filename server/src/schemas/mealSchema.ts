import { Model, model, Schema, Types } from "mongoose";
import { IIngredient } from "./ingredientSchema";

interface IMealIngredient {
  ingredient: Types.ObjectId;
  quantity: number;
}

interface INutritionTotals {
  price: number;
  calories: number;
  totalFat: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  sodium: number;
  totalCarbohydrate: number;
  dietaryFiber: number;
  totalSugars: number;
  addedSugars: number;
  protein: number;
  vitaminD: number;
  calcium: number;
  iron: number;
  potassium: number;
}

interface IMeal {
  name: string;
  ingredients: IMealIngredient[];
  notes: string;
}

interface IMealMethods {
  calculateNutritionAndPrice: () => Promise<INutritionTotals>;
}

type MealModel = Model<IMeal, {}, IMealMethods>;

const mealSchema = new Schema<IMeal, MealModel, IMealMethods>({
  name: { type: String, required: true },
  ingredients: [
    {
      ingredient: { type: Types.ObjectId, ref: "Ingredient", required: true },
      quantity: { type: Number, required: true },
    },
  ],
  notes: { type: String, default: "" },
});

mealSchema.method("calculateNutritionAndPrice", async function () {
  await this.populate("ingredients.ingredient");

  const totals = {
    price: 0,
    calories: 0,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    totalCarbohydrate: 0,
    dietaryFiber: 0,
    totalSugars: 0,
    addedSugars: 0,
    protein: 0,
    vitaminD: 0,
    calcium: 0,
    iron: 0,
    potassium: 0,
  };

  this.ingredients.forEach(({ ingredient, quantity }: IMealIngredient) => {
    const populatedIngredient = ingredient as unknown as IIngredient; // Safely cast 'ingredient' to IIngredient

    const factor = quantity;

    totals.price +=
      (populatedIngredient.price / populatedIngredient.servingsPerContainer) *
      quantity;
    totals.calories += populatedIngredient.calories * factor;
    totals.totalFat += populatedIngredient.totalFat * factor;
    totals.saturatedFat += populatedIngredient.saturatedFat * factor;
    totals.transFat += populatedIngredient.transFat * factor;
    totals.cholesterol += populatedIngredient.cholesterol * factor;
    totals.sodium += populatedIngredient.sodium * factor;
    totals.totalCarbohydrate += populatedIngredient.totalCarbohydrate * factor;
    totals.dietaryFiber += populatedIngredient.dietaryFiber * factor;
    totals.totalSugars += populatedIngredient.totalSugars * factor;
    totals.addedSugars += populatedIngredient.addedSugars * factor;
    totals.protein += populatedIngredient.protein * factor;
    totals.vitaminD += populatedIngredient.vitaminD * factor;
    totals.calcium += populatedIngredient.calcium * factor;
    totals.iron += populatedIngredient.iron * factor;
    totals.potassium += populatedIngredient.potassium * factor;
  });

  return totals;
});

const Meal = model<IMeal, MealModel>("Meal", mealSchema);

export default Meal;
