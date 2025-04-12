import { useEffect, useState } from "react";

type IngredientResult = { id: string; name: string };
type AddedIngredient = { id: string; name: string; quantity: number };

function App() {
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<IngredientResult[]>([]);
  const [selected, setSelected] = useState<AddedIngredient[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query) {
        fetch(`http://localhost:3000/search?query=${encodeURIComponent(query)}`)
          .then((res) => res.json())
          .then(setResults);
      } else {
        setResults([]);
      }
    }, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const addIngredient = (item: IngredientResult) => {
    if (!selected.find((i) => i.id === item.id)) {
      setSelected((prev) => [...prev, { ...item, quantity: 1 }]);
    }
    setQuery("");
    setResults([]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3000/meals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        notes,
        ingredients: selected.map((i) => ({
          ingredient: i.id,
          quantity: i.quantity,
        })),
      }),
    });
    if (res.ok) {
      alert("Meal saved!");
      setName("");
      setNotes("");
      setSelected([]);
    } else {
      alert("Failed to save meal");
    }
  };

  return (
    <div className="lg:w-3/4 lg:mx-auto ">
      <h1 className="text-xl font-bold mb-4">Create Meal</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <input
            className="w-full border p-2"
            placeholder="Meal name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <textarea
            className="w-full border p-2"
            placeholder="Notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <input
            className="w-full border p-2"
            placeholder="Search ingredients"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {results.length > 0 && (
            <ul className="border rounded-md shadow">
              {results.map((item) => (
                <li
                  key={item.id}
                  className="p-2 hover:bg-gray-800 cursor-pointer"
                  onClick={() => addIngredient(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          )}
          <button
            className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-4 py-2 rounded"
            type="submit"
          >
            Save Meal
          </button>
        </div>

        <div>
          <table className="w-full border border-gray-400">
            <thead>
              <tr>
                <th className="p-2 border-b border-gray-400">Ingredient</th>
                <th className="p-2 border-b border-gray-400">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((i, index) => (
                <tr key={i.id}>
                  <td className="p-2 border-b border-gray-400">{i.name}</td>
                  <td className="p-2 border-b w-32 border-gray-400">
                    <input
                      type="number"
                      className="w-full"
                      min={0}
                      value={i.quantity}
                      onChange={(e) => {
                        const newSelected = [...selected];
                        newSelected[index].quantity = parseFloat(
                          e.target.value
                        );
                        setSelected(newSelected);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
}

export default App;
