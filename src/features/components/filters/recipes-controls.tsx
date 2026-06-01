"use client";

import { useTransition, type ReactNode } from "react";
import { useRecipesSearchParams } from "@/features/hooks/use-recipes-search-params";
import { RecipesFilters } from "@/features/components/filters/recipes-filters";
import { RecipesPagination } from "@/features/components/filters/recipes-pagination";
import type { RecipeSearchParams } from "@/features/schemas/recipe-search-params.schema";

interface Props {
  total: number;
  initialParams: RecipeSearchParams;
  tags: string[];
  children: ReactNode;
}

export function RecipesControls({
  total,
  initialParams,
  tags,
  children,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const searchParams = useRecipesSearchParams(startTransition, initialParams);

  return (
    <>
      <RecipesFilters
        isPending={isPending}
        searchParams={searchParams}
        tags={tags}
      />
      {children}
      <div className="mt-6">
        <RecipesPagination
          total={total}
          isPending={isPending}
          searchParams={searchParams}
        />
      </div>
    </>
  );
}
