import { FaBowlFood, FaCarrot, FaHouse, FaPlus } from "react-icons/fa6";
import { Link, useLocation } from "react-router";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-neutral-200"
      : "text-neutral-500 hover:text-neutral-400";
  };

  const links = [
    { to: "/", label: "Home", icon: FaHouse },
    { to: "/ingredients", label: "Ingredients", icon: FaCarrot },
    { to: "/ingredients/add", label: "Add Ingredient", icon: FaPlus },
    { to: "/meals", label: "Meals", icon: FaBowlFood },
    { to: "/meals/add", label: "Add Meal", icon: FaPlus },
  ];

  return (
    <nav className="h-16 sticky shadow-md top-0 bg-neutral-900">
      <ul className="flex justify-center items-center gap-6 h-full">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              className={`flex items-center gap-1 ${isActive(link.to)}`}
              to={link.to}
            >
              <link.icon />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
