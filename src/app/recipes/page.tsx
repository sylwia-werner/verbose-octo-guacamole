import { getRecipes, getTags } from "@/features/api/fetchers";
import { RecipeList } from "@/features/components/list/recipe-list";
import { RecipesControls } from "@/features/components/filters/recipes-controls";
import { parseRecipeSearchParams } from "@/features/schemas/recipe-search-params.schema";
import { Suspense } from "react";
import { RecipeListSkeleton } from "@/features/components/list/recipe-list-skeleton";

export const dynamic = "force-dynamic";

interface RecipesPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function RecipesPage({ searchParams }: RecipesPageProps) {
  const params = parseRecipeSearchParams(await searchParams);
  const [data, tags] = await Promise.all([getRecipes(params), getTags()]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Recipes</h1>
      <RecipesControls total={data.total} initialParams={params} tags={tags}>
        <Suspense fallback={<RecipeListSkeleton count={12} />}>
          <RecipeList recipes={data.recipes} />
        </Suspense>
      </RecipesControls>
    </main>
  );
}
