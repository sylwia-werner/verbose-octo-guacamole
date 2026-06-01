import { getRecipes } from "@/features/api/fetchers";
import { RecipeList } from "@/features/components/recipe-list";
import { RecipeListSkeleton } from "@/features/components/recipe-list-skeleton";
import { Suspense } from "react";

export default async function RecipesPage() {
  const data = await getRecipes();
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Recipes</h1>

      <Suspense fallback={<RecipeListSkeleton count={12} />}>
        <RecipeList recipes={data.recipes} />
      </Suspense>
    </main>
  );
}
