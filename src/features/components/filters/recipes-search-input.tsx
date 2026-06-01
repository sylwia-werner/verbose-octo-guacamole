"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/shared/components/ui/input";
import { useDebouncedValue } from "@/features/hooks/use-debounced-value";

const SEARCH_DEBOUNCE_MS = 400;

interface RecipesSearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export function RecipesSearchInput({
  value,
  onChange,
}: RecipesSearchInputProps) {
  const [inputValue, setInputValue] = useState(value);
  const debouncedInput = useDebouncedValue(inputValue, SEARCH_DEBOUNCE_MS);
  const isInternalChange = useRef(false);

  useEffect(() => {
    if (!isInternalChange.current) return;
    isInternalChange.current = false;
    onChange(debouncedInput);
  }, [debouncedInput, onChange]);

  useEffect(() => {
    if (isInternalChange.current) return;
    setInputValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    isInternalChange.current = true;
    setInputValue(e.target.value);
  };

  return (
    <Input
      placeholder="Search recipes..."
      value={inputValue}
      onChange={handleChange}
      className="sm:w-56"
      aria-label="Search recipes"
    />
  );
}
