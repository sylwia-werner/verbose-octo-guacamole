export const API_ROUTES = {
  recipes: 'recipes',
  recipe: 'recipes/:id',
  recipesSearch: 'recipes/search',
  recipesByTag: 'recipes/tag/:tag',
  recipesByMealType: 'recipes/meal-type/:mealType',
  recipeTags: 'recipes/tags',
} as const;