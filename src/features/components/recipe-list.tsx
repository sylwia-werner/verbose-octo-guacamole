import { RecipeCard } from "@/features/components/recipe-card";
import { Recipe } from "@/features/types/recipe.types";

type Props = { recipes: Recipe[] };

export function RecipeList({ recipes }: Props) {
  if (recipes.length === 0) {
    return (
      <div className="py-24 text-center">
        <p className="text-muted-foreground text-lg">No recipes found.</p>
        <p className="text-muted-foreground mt-1 text-sm">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}
