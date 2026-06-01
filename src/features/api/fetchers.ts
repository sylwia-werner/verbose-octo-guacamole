import { cache } from "react";
import { fetchApi } from "@/shared/api/fetch";
import { API_ROUTES } from "@/features/api/api-routes";
import { tagsSchema } from "@/features/schemas/tags.schema";
import { recipeSchema } from "@/features/schemas/recipe.schema";
import { recipesListSchema } from "@/features/schemas/recipes-list.schema";
import { buildRecipesRequest } from "@/features/api/build-recipes-reuqest";
import { RecipeSearchParams } from "@/features/schemas/recipe-search-params.schema";
import { NotFoundError } from "@/shared/api/errors";

export const getRecipes = (async (params: RecipeSearchParams) => {
  const { route, params: queryParams } = buildRecipesRequest(params);
  
  return fetchApi(route, recipesListSchema, {
    params: queryParams,
    next: { revalidate: 60 }
  });
});



export const getRecipe = (async (id: number) => {
  try {
    return await fetchApi(API_ROUTES.recipe, recipeSchema, { 
  params: { id },
  next: { revalidate: 60 }
});
  } catch (err) {
    if (err instanceof NotFoundError) return null;
    throw err;
  }
});

export const getTags = cache(async () => {
  return fetchApi(API_ROUTES.recipeTags, tagsSchema, { next: { revalidate: 3600 } });
});