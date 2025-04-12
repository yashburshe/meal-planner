import { Link } from "react-router";

export default function MealCard({ meal }: { meal: Meal }) {
  return (
    <div className="box-sizing bg-slate-700 border-amber-50/0 border-1 hover:border-1 cursor-pointer hover:border-neutral-300 p-4 transition-shadow duration-300">
      <Link to={`/meals/${meal._id}`}>
        <h2 className="underline">{meal.name}</h2>
      </Link>
    </div>
  );
}
