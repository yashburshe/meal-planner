import { useEffect, useState } from "react";
import { Link } from "react-router";
import IngredientCard from "~/components/IngredientCard";

export default function IngredientsPage() {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/ingredients")
      .then((response) => response.json())
      .then((data) => setIngredients(data))
      .catch((error) => console.error("Error fetching ingredients:", error));
  });

  return (
    <div>
      <ul className="flex gap-2">
        {ingredients.map((ingredient) => (
          <li>
            <IngredientCard ingredient={ingredient} />
          </li>
        ))}
      </ul>
    </div>
  );
}
