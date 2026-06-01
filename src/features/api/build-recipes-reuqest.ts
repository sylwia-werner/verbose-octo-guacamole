import { PAGE_SIZE } from '@/shared/lib/constants';
import type { RecipeSearchParams } from '../schemas/recipe-search-params.schema';
import { API_ROUTES } from '@/features/api/api-routes';

type ResolvedQuery = {
  route: string;
  params: Record<string, string | number>;
};

export function buildRecipesRequest(searchParams: RecipeSearchParams): ResolvedQuery {

  const pagination = {
    limit: PAGE_SIZE,
    skip: (searchParams.page - 1) * PAGE_SIZE,
    sortBy: searchParams.sortBy,
    order: searchParams.order,
  } satisfies Record<string, string | number>;

  if (searchParams.q) {
    return { route: API_ROUTES.recipesSearch, params: { q: searchParams.q, ...pagination } };
  }

  if (searchParams.tag) {
    return { route: API_ROUTES.recipesByTag, params: { tag: searchParams.tag, ...pagination } };
  }

  if (searchParams.mealType) {
    return { route: API_ROUTES.recipesByMealType, params: { mealType: searchParams.mealType, ...pagination } };
  }

  return { route: API_ROUTES.recipes, params: pagination };
}