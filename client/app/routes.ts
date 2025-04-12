import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [index("routes/home.tsx"),
    route("ingredients", "routes/ingredients.tsx"),
    route("ingredients/:id", "routes/ingredient.tsx"),
    route("ingredients/add", "routes/addingredient.tsx"),
    route("meals", "routes/meals.tsx"),
    route("meals/add", "routes/addmeals.tsx"),
    route("meals/:id", "routes/meal.tsx"),
] satisfies RouteConfig;
