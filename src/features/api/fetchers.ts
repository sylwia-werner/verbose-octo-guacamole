import { cache } from "react";
import { fetchApi } from "@/shared/api/fetch";
import { API_ROUTES } from "@/features/api/api-routes";
import { tagsSchema } from "@/features/schemas/tags.schema";
import { recipesListSchema } from "@/features/schemas/recipes-list.schema";
import { buildRecipesRequest } from "@/features/api/build-recipes-reuqest";
import { RecipeSearchParams } from "@/features/schemas/recipe-search-params.schema";

export const getRecipes = (async (params: RecipeSearchParams) => {
  const { route, params: queryParams } = buildRecipesRequest(params);
  
  return fetchApi(route, recipesListSchema, {
    params: queryParams,
    next: { revalidate: 60 }
  });
});


export const getTags = cache(async () => {
  return fetchApi(API_ROUTES.recipeTags, tagsSchema, { next: { revalidate: 3600 } });
});