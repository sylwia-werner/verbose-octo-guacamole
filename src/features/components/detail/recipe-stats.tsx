import { Recipe } from "@/features/types/recipe.types";
import { StatItem } from "@/features/components/detail/stat-item";

interface RecipeStatsProps {
  recipe: Recipe;
  totalTime: number;
}

export function RecipeStats({ recipe, totalTime }: RecipeStatsProps) {
  return (
    <dl className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
      <StatItem label="Prep time" value={`${recipe.prepTimeMinutes} min`} />
      <StatItem label="Cook time" value={`${recipe.cookTimeMinutes} min`} />
      <StatItem label="Total time" value={`${totalTime} min`} />
      <StatItem label="Servings" value={String(recipe.servings)} />
      <StatItem label="Calories" value={`${recipe.caloriesPerServing} kcal`} />
      <StatItem label="Rating" value={`★ ${recipe.rating.toFixed(1)}`} />
      <StatItem label="Reviews" value={String(recipe.reviewCount)} />
    </dl>
  );
}
