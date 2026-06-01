import { RecipeDetail } from "@/features/components/detail/recipe-detail";
import { notFound } from "next/navigation";
import { getRecipe } from "@/features/api/fetchers";
import { Button } from "@/shared/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const recipe = await getRecipe(Number(id));

  if (!recipe) return {};

  return {
    title: recipe.name,
    description: `${recipe.cuisine} recipe — ${recipe.prepTimeMinutes + recipe.cookTimeMinutes} min, ${recipe.caloriesPerServing} kcal per serving.`,
  };
}

export default async function RecipePage({ params }: PageProps) {
  const { id } = await params;
  const recipe = await getRecipe(Number(id));

  if (!recipe) notFound();

  return (
    <main className="container mx-auto px-4 py-8">
      <Button asChild className="mb-6">
        <Link href="/recipes">
          <ChevronLeft className="size-4" />
          Back to recipes
        </Link>
      </Button>
      <RecipeDetail recipe={recipe} />
    </main>
  );
}
