"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

const SORT_OPTIONS = [
  { label: "Name (A–Z)", value: "name|asc" },
  { label: "Name (Z–A)", value: "name|desc" },
  { label: "Rating (high–low)", value: "rating|desc" },
  { label: "Rating (low–high)", value: "rating|asc" },
  { label: "Calories (low–high)", value: "caloriesPerServing|asc" },
  { label: "Calories (high–low)", value: "caloriesPerServing|desc" },
];

interface RecipesSortSelectProps {
  sortBy: string;
  order: "asc" | "desc";
  onChange: (sortBy: string, order: "asc" | "desc") => void;
}

export function RecipesSortSelect({ sortBy, order, onChange }: RecipesSortSelectProps) {
  const sortValue = `${sortBy}|${order}`;

  return (
    <Select
      value={sortValue}
      onValueChange={(value) => {
        const [by, ord] = value.split("|") as [string, "asc" | "desc"];
        onChange(by, ord);
      }}
    >
      <SelectTrigger className="sm:w-48" aria-label="Sort recipes">
        <SelectValue placeholder="Sort by..." />
      </SelectTrigger>
      <SelectContent>
        {SORT_OPTIONS.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
