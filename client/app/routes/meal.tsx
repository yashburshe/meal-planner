import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function MealPage() {
  const [meal, setMeal] = useState<any>(null);
  const location = useLocation();
  const mealId = location.pathname.split("/").pop();

  useEffect(() => {
    fetch(`http://localhost:3000/meals/${mealId}`)
      .then((response) => response.json())
      .then((data) => setMeal(data))
      .catch((error) => console.error("Error fetching meal:", error));
  }, [mealId]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{meal.name}</h2>
      {meal.notes !== "" && <p>Notes: {meal.notes}</p>}
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <tbody>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Price</td>
            <td className="border border-gray-400 px-4 py-2">
              ${meal.totals.price.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Calories</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.calories}
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Total Fat</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.totalFat}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Saturated Fat</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.saturatedFat}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Trans Fat</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.transFat}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Cholesterol</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.cholesterol}mg
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Sodium</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.sodium}mg
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">
              Total Carbohydrate
            </td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.totalCarbohydrate}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Dietary Fiber</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.dietaryFiber}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Total Sugars</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.totalSugars}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Added Sugars</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.addedSugars}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Protein</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.protein}g
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Vitamin D</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.vitaminD}mcg
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Calcium</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.calcium}mg
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Iron</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.iron}mg
            </td>
          </tr>
          <tr>
            <td className="border border-gray-400 px-4 py-2">Potassium</td>
            <td className="border border-gray-400 px-4 py-2">
              {meal.totals.potassium}mg
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Ingredients:</h3>
      <table className="table-auto border-collapse border border-gray-400 w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Ingredient</th>
            <th className="border border-gray-400 px-4 py-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {meal.ingredients.map((ingredient: any, index: number) => (
            <tr key={index}>
              <td className="border border-gray-400 px-4 py-2">
                {ingredient.ingredient.name}
              </td>
              <td className="border border-gray-400 px-4 py-2">
                {ingredient.quantity}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
