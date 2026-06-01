"use client";

import { Pagination } from "@/shared/components/pagination";
import { PAGE_SIZE } from "@/shared/lib/constants";
import type { useRecipesSearchParams } from "@/features/hooks/use-recipes-search-params";

type SearchParams = ReturnType<typeof useRecipesSearchParams>;

interface RecipesPaginationProps {
  total: number;
  isPending: boolean;
  searchParams: SearchParams;
}

export function RecipesPagination({ total, isPending, searchParams }: RecipesPaginationProps) {
  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <Pagination
      page={searchParams.page}
      totalPages={totalPages}
      onPageChange={searchParams.setPage}
      isPending={isPending}
    />
  );
}
