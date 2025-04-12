import express from 'express';
import Ingredient from '../schemas/ingredientSchema';

const searchRouter = express.Router();

searchRouter.get("/", async (req, res) => {
  const query =
    typeof req.query.query === "string" ? req.query.query.toLowerCase() : "";

  console.log(query);

  try {
    const results = await Ingredient.find({
      name: { $regex: query, $options: "i" },
    }).limit(5);

    const formatted = results.map((doc) => ({
      id: doc._id.toString(),
      name: doc.name,
    }));

    res.json(formatted);
  } catch (err) {
    console.error("Ingredient search error:", err);
    res.status(500).json({ error: "Failed to search ingredients" });
  }
  });

export default searchRouter;