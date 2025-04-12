import { Link } from "react-router";

export default function IngredientCard({
  ingredient,
}: {
  ingredient: Ingredient;
}) {
  return (
    <div className="box-sizing bg-slate-700 border-amber-50/0 border-1 hover:border-1 cursor-pointer hover:border-neutral-300 p-4 transition-shadow duration-300">
      <Link to={`/ingredients/${ingredient._id}`}>
        <h2 className="underline">{ingredient.name}</h2>
        <p>Price: ${ingredient.price}</p>
        <p>Calories: {ingredient.calories}</p>
        <p>Protein: {ingredient.protein}g</p>
      </Link>
    </div>
  );
}
