"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";

const ALL_VALUE = "all";

interface RecipesTagSelectProps {
  value: string;
  tags: string[];
  onChange: (value: string) => void;
}

export function RecipesTagSelect({ value, tags, onChange }: RecipesTagSelectProps) {
  return (
    <Select
      value={value || ALL_VALUE}
      onValueChange={(newValue) => onChange(newValue === ALL_VALUE ? "" : newValue)}
    >
      <SelectTrigger className="sm:w-44" aria-label="Filter by tag">
        <SelectValue placeholder="All tags" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={ALL_VALUE}>All tags</SelectItem>
        {tags.map((tag) => (
          <SelectItem key={tag} value={tag}>
            {tag}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
