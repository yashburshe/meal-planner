import { useEffect, useState } from "react";
import { Link } from "react-router";
import MealCard from "~/components/MealCard";

export default function MealPage() {
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((response) => response.json())
      .then((data) => setMeals(data))
      .catch((error) => console.error("Error fetching meals:", error));
  }, []);

  return (
    <div className="flex gap-2">
      {meals.map((meal) => (
        <MealCard key={meal._id} meal={meal} />
      ))}
    </div>
  );
}
