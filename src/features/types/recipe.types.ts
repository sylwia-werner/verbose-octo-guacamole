import type { z } from "zod";
import { recipesListSchema } from "@/features/schemas/recipes-list.schema";
import { recipeSchema } from "@/features/schemas/recipe.schema";

export type Recipe = z.infer<typeof recipeSchema>;
export type RecipesListResponse = z.infer<typeof recipesListSchema>;
