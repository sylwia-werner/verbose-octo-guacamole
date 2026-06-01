import { z } from "zod";

export const recipeSchema = z.object({
  id: z.number(),
  name: z.string(),
  image: z.url(),
  cuisine: z.string(),
  difficulty: z.enum(["Easy", "Medium", "Hard"]),
  rating: z.number(),
  reviewCount: z.number(),
  prepTimeMinutes: z.number(),
  cookTimeMinutes: z.number(),
  servings: z.number(),
  caloriesPerServing: z.number(),
  mealType: z.array(z.string()),
  tags: z.array(z.string()),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  userId: z.number(),
});
