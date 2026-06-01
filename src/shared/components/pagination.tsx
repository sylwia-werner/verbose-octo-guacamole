"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

const MAX_VISIBLE_PAGES = 5;

export function getVisiblePages(
  currentPage: number,
  totalPages: number,
): number[] {
  const half = Math.floor(MAX_VISIBLE_PAGES / 2);

  let start = Math.max(1, currentPage - half);
  const end = Math.min(totalPages, start + MAX_VISIBLE_PAGES - 1);

  if (end - start < MAX_VISIBLE_PAGES - 1) {
    start = Math.max(1, end - MAX_VISIBLE_PAGES + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isPending?: boolean;
}

export function Pagination({
  page,
  totalPages,
  onPageChange,
  isPending,
}: Props) {
  if (totalPages <= 1) return null;

  const visiblePages = getVisiblePages(page, totalPages);
  const canGoPrev = page > 1;
  const canGoNext = page < totalPages;

  return (
    <nav
      className="flex items-center justify-center gap-1"
      aria-label="Pagination"
    >
      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => onPageChange(page - 1)}
        disabled={!canGoPrev || isPending}
        aria-label="Go to previous page"
      >
        <ChevronLeftIcon />
      </Button>

      {visiblePages.map((p) => (
        <Button
          key={p}
          variant={p === page ? "default" : "outline"}
          size="icon-sm"
          onClick={() => onPageChange(p)}
          disabled={isPending}
          aria-label={`Go to page ${p}`}
          aria-current={p === page ? "page" : undefined}
        >
          {p}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon-sm"
        onClick={() => onPageChange(page + 1)}
        disabled={!canGoNext || isPending}
        aria-label="Go to next page"
      >
        <ChevronRightIcon />
      </Button>
    </nav>
  );
}
