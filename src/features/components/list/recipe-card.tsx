import Image from "next/image";
import Link from "next/link";

import { Recipe } from "@/features/types/recipe.types";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Star } from "lucide-react";

const DIFFICULTY_COLOR: Record<Recipe["difficulty"], string> = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

type Props = { recipe: Recipe };

export function RecipeCard({ recipe }: Props) {
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes || 0;

  return (
    <Card className="relative flex flex-col overflow-hidden pt-0 transition-transform duration-250 ease-out hover:scale-[1.01] hover:shadow-md">
      <div className="bg-muted relative aspect-video overflow-hidden rounded-t-xl">
        <Image
          src={recipe.image}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="line-clamp-2 text-base">
          <Link
            href={`/recipes/${recipe.id}`}
            className="focus-visible:ring-ring after:absolute after:inset-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            {recipe.name}
          </Link>
        </CardTitle>
        <div className="flex flex-wrap gap-1.5">
          <Badge className={DIFFICULTY_COLOR[recipe.difficulty]}>
            {recipe.difficulty}
          </Badge>
          <Badge variant="secondary">{recipe.cuisine}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
          <span>{totalTime} min</span>
          <span>{recipe.servings} servings</span>
          <span>{recipe.caloriesPerServing} kcal</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          <Star size={16} /> {recipe.rating.toFixed(1) ?? "-"}
        </span>
        <span className="text-muted-foreground text-xs">
          {recipe.reviewCount} reviews
        </span>
      </CardFooter>
    </Card>
  );
}
