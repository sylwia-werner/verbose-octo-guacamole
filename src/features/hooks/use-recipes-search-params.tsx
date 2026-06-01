"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCallback, type TransitionStartFunction } from "react";
import type { RecipeSearchParams } from "@/features/schemas/recipe-search-params.schema";

export function useRecipesSearchParams(
  startTransition: TransitionStartFunction,
  initialParams: RecipeSearchParams,
) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (updates: Record<string, string | null>) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(updates)) {
        if (value === null) {
          params.delete(key);
        } else {
          params.set(key, value);
        }
      }
      return params.toString();
    },
    [searchParams],
  );

  const setParam = useCallback(
    (updates: Record<string, string | null>) => {
      const queryString = createQueryString(updates);
      startTransition(() => {
        router.push(`${pathname}?${queryString}`, { scroll: false });
      });
    },
    [router, pathname, createQueryString, startTransition],
  );

  const rawOrder = searchParams.get("order");

  const setSearch = useCallback(
    (query: string) =>
      setParam({ q: query || null, tag: null, mealType: null, page: null }),
    [setParam],
  );
  const setTag = useCallback(
    (tag: string) =>
      setParam({ tag: tag || null, q: null, mealType: null, page: null }),
    [setParam],
  );
  const setMealType = useCallback(
    (mealType: string) =>
      setParam({ mealType: mealType || null, q: null, tag: null, page: null }),
    [setParam],
  );
  const setSort = useCallback(
    (sortBy: string, order: "asc" | "desc") =>
      setParam({ sortBy, order, page: null }),
    [setParam],
  );
  const setPage = useCallback(
    (page: number) => setParam({ page: String(page) }),
    [setParam],
  );

  return {
    q: searchParams.get("q") ?? initialParams.q,
    tag: searchParams.get("tag") ?? initialParams.tag,
    mealType: searchParams.get("mealType") ?? initialParams.mealType,
    sortBy: searchParams.get("sortBy") ?? initialParams.sortBy,
    order:
      rawOrder === "desc"
        ? "desc"
        : rawOrder === "asc"
          ? "asc"
          : initialParams.order,
    page: Number(searchParams.get("page") ?? initialParams.page),
    setSearch,
    setTag,
    setMealType,
    setSort,
    setPage,
  };
}
