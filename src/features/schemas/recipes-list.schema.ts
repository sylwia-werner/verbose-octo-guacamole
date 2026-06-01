import { z } from "zod";
import { recipeSchema } from "@/features/schemas/recipe.schema";

export const recipesListSchema = z.object({
  recipes: z.array(recipeSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});
