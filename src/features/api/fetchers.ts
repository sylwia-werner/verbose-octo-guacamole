import { cache } from "react";
import { fetchApi } from "@/shared/api/fetch";
import { API_ROUTES } from "@/features/api/api-routes";
import { tagsSchema } from "@/features/schemas/tags.schema";
import { recipesListSchema } from "@/features/schemas/recipes-list.schema";

export const getRecipes = (async () => {
  return fetchApi(API_ROUTES.recipes, recipesListSchema, {
    next: { revalidate: 60 }
  });
});

export const getTags = cache(async () => {
  return fetchApi(API_ROUTES.recipeTags, tagsSchema, { next: { revalidate: 3600 } });
});