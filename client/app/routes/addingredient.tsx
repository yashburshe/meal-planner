import React, { useState } from "react";

export default function AddIngredientPage() {
  const [formData, setFormData] = useState({
    name: "",
    store: "",
    price: 0,
    servingsPerContainer: 0,
    servingSize: 0,
    calories: 0,
    totalFat: 0,
    saturatedFat: 0,
    transFat: 0,
    cholesterol: 0,
    sodium: 0,
    totalCarbohydrate: 0,
    dietaryFiber: 0,
    totalSugars: 0,
    addedSugars: 0,
    protein: 0,
    vitaminD: 0,
    calcium: 0,
    iron: 0,
    potassium: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "name" || name === "store" ? value : parseFloat(value),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/ingredients/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add ingredient");
      }

      const data = await response.json();
      alert("Ingredient added successfully!");
      console.log(data);
    } catch (error: any) {
      alert(error.message);
    }
  };

  const formInfo = [
    { name: "name", type: "text", label: "Name", required: true },
    {
      name: "store",
      type: "text",
      label: "Store",
      required: true,
    },
    { name: "price", type: "number", label: "Price", required: true },
    {
      name: "servingsPerContainer",
      type: "number",
      label: "Servings Per Container",
      required: true,
    },
    {
      name: "servingSize",
      type: "number",
      label: "Serving Size",
      required: true,
    },
    { name: "calories", type: "number", label: "Calories", required: true },
    { name: "totalFat", type: "number", label: "Total Fat", required: true },
    {
      name: "saturatedFat",
      type: "number",
      label: "Saturated Fat",
      required: true,
    },
    { name: "transFat", type: "number", label: "Trans Fat", required: true },
    {
      name: "cholesterol",
      type: "number",
      label: "Cholesterol",
      required: true,
    },
    { name: "sodium", type: "number", label: "Sodium", required: true },
    {
      name: "totalCarbohydrate",
      type: "number",
      label: "Total Carbohydrate",
      required: true,
    },
    {
      name: "dietaryFiber",
      type: "number",
      label: "Dietary Fiber",
      required: true,
    },
    {
      name: "totalSugars",
      type: "number",
      label: "Total Sugars",
      required: true,
    },
    {
      name: "addedSugars",
      type: "number",
      label: "Added Sugars",
      required: true,
    },
    { name: "protein", type: "number", label: "Protein", required: true },
    { name: "vitaminD", type: "number", label: "Vitamin D", required: true },
    { name: "calcium", type: "number", label: "Calcium", required: true },
    { name: "iron", type: "number", label: "Iron", required: true },
    { name: "potassium", type: "number", label: "Potassium", required: true },
  ];

  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        {formInfo.map((field) => (
          <div key={field.name} className="grid grid-cols-2 mb-2">
            <label className="block text-sm font-medium text-gray-400">
              {field.label}
            </label>
            <input
              type={field.type}
              name={field.name}
              value={formData[field.name as keyof typeof formData]}
              onChange={handleChange}
              required={field.required}
              className="mt-1 block w-full text-neutral-200 border-b border-gray-600 p-1"
            />
          </div>
        ))}
        <button
          className="border cursor-pointer hover:bg-blue-400 px-4 py-2 rounded-md bg-blue-300 text-neutral-800"
          type="submit"
        >
          Add Ingredient
        </button>
      </form>
    </div>
  );
}
