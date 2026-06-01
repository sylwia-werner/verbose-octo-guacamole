import { z } from "zod";

export const recipeSearchParamsSchema = z.object({
  q: z.string().optional().default(""),
  tag: z.string().optional().default(""),
  mealType: z.string().optional().default(""),
  sortBy: z.string().optional().default("name"),
  order: z.enum(["asc", "desc"]).optional().default("asc"),
  page: z.coerce.number().int().positive().optional().default(1),
});

export type RecipeSearchParams = z.infer<typeof recipeSearchParamsSchema>;

export function parseRecipeSearchParams(
  raw: Record<string, string | string[] | undefined>,
): RecipeSearchParams {
  const normalized = Object.fromEntries(
    Object.entries(raw).map(([k, v]) => [k, Array.isArray(v) ? v[0] : v]),
  );
  return recipeSearchParamsSchema.parse(normalized);
}
