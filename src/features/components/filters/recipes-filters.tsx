import { RecipesSearchInput } from "@/features/components/filters/recipes-search-input";
import { RecipesTagSelect } from "@/features/components/filters/recipes-tag-select";
import { RecipesMealTypeSelect } from "@/features/components/filters/recipes-meal-type-select";
import { RecipesSortSelect } from "@/features/components/filters/recipes-sort-select";
import { useRecipesSearchParams } from "@/features/hooks/use-recipes-search-params";

type SearchParams = ReturnType<typeof useRecipesSearchParams>;

interface RecipesFiltersProps {
  isPending: boolean;
  searchParams: SearchParams;
  tags: string[];
}

export function RecipesFilters({
  isPending,
  searchParams,
  tags,
}: RecipesFiltersProps) {
  const {
    q,
    tag,
    mealType,
    sortBy,
    order,
    setSearch,
    setTag,
    setMealType,
    setSort,
  } = searchParams;

  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <RecipesSearchInput value={q} onChange={setSearch} />
      <RecipesTagSelect value={tag} tags={tags} onChange={setTag} />
      <RecipesMealTypeSelect value={mealType} onChange={setMealType} />
      <RecipesSortSelect sortBy={sortBy} order={order} onChange={setSort} />

      {isPending && (
        <span className="text-muted-foreground text-sm">Updating...</span>
      )}
    </div>
  );
}
