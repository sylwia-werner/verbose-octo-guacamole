"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

const ALL_VALUE = "all";

const MEAL_TYPES = ["Breakfast", "Lunch", "Dinner", "Snack", "Dessert"];

interface RecipesMealTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function RecipesMealTypeSelect({ value, onChange }: RecipesMealTypeSelectProps) {
  return (
    <Select
      value={value || ALL_VALUE}
      onValueChange={(newValue) =>
        onChange(newValue === ALL_VALUE ? "" : newValue)
      }
    >
      <SelectTrigger className="sm:w-44" aria-label="Filter by meal type">
        <SelectValue placeholder="All meal types" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_VALUE}>All meal types</SelectItem>
        {MEAL_TYPES.map((mealType) => (
          <SelectItem key={mealType} value={mealType.toLowerCase()}>
            {mealType}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
