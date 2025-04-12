import { model, Schema } from "mongoose";

export interface IIngredient {
    name: string;
    store: string;
    price: number;
    servingsPerContainer: number;
    servingSize: number;
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

const ingredientSchema = new Schema<IIngredient>({
    name: { type: String, required: true },
    store: { type: String, required: true },
    price: { type: Number, required: true },
    servingsPerContainer: { type: Number, required: true },
    servingSize: { type: Number, required: true },
    calories: { type: Number, required: true },
    totalFat: { type: Number, required: true },
    saturatedFat: { type: Number, required: true },
    transFat: { type: Number, required: true },
    cholesterol: { type: Number, required: true },
    sodium: { type: Number, required: true },
    totalCarbohydrate: { type: Number, required: true },
    dietaryFiber: { type: Number, required: true },
    totalSugars: { type: Number, required: true },
    addedSugars: { type: Number, required: true },
    protein: { type: Number, required: true },
    vitaminD: { type: Number, required: true },
    calcium: { type: Number, required: true },
    iron: { type: Number, required: true },
    potassium: { type: Number, required: true },
});

const Ingredient = model<IIngredient>("Ingredient", ingredientSchema);

export default Ingredient;