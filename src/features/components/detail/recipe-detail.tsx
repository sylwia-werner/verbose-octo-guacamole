import { Recipe } from "@/features/types/recipe.types";
import { Badge } from "@/shared/components/ui/badge";
import { RecipeStats } from "@/features/components/detail/recipe-stats";
import { RecipeIngredients } from "@/features/components/detail/recipe-ingredients";
import { RecipeInstructions } from "@/features/components/detail/recipe-instructions";
import Image from "next/image";

const DIFFICULTY_COLOR: Record<Recipe["difficulty"], string> = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

interface RecipeDetailProps {
  recipe: Recipe;
}

export function RecipeDetail({ recipe }: RecipeDetailProps) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <div className="flex flex-col gap-10">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="bg-muted relative aspect-video overflow-hidden rounded-xl">
          <Image
            src={recipe.image}
            alt={recipe.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight">{recipe.name}</h1>

          <div className="flex flex-wrap gap-2">
            <Badge className={DIFFICULTY_COLOR[recipe.difficulty]}>
              {recipe.difficulty}
            </Badge>
            <Badge variant="secondary">{recipe.cuisine}</Badge>
            {recipe.mealType.map((type) => (
              <Badge key={type} variant="outline">
                {type}
              </Badge>
            ))}
          </div>

          <RecipeStats recipe={recipe} totalTime={totalTime} />

          {recipe.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {recipe.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <RecipeIngredients ingredients={recipe.ingredients} />
        <RecipeInstructions instructions={recipe.instructions} />
      </div>
    </div>
  );
}
