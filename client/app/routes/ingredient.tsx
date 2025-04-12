import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

export default function IngredientPage() {
    const [ingredient, setIngredient] = useState<any>(null);
    const location = useLocation();
    const ingredientId = location.pathname.split("/").pop();
    
    useEffect(() => {
        fetch(`http://localhost:3000/ingredients/${ingredientId}`)
        .then((response) => response.json())
        .then((data) => setIngredient(data))
        .catch((error) => console.error("Error fetching ingredient:", error));
    }, [ingredientId]);
    
    if (!ingredient) {
        return <div>Loading...</div>;
    }
    
    return (
        <div>
        <h2>{ingredient.name}</h2>
        <h3>Ingredients:</h3>
        {JSON.stringify(ingredient)}
        </div>
    );
}