interface Ingredient {
    _id: string;
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
    __v: number;
}

interface Meal {
    _id: string;
    name: string;
    ingredients: string[];
    notes: string;
    __v: number;
}