import { getTags } from "@/features/api/fetchers";
import { RecipesTagSelect } from "@/features/components/filters/recipes-tag-select";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export async function RecipesTagLoader({ value, onChange }: Props) {
  const tags = await getTags();
  return <RecipesTagSelect value={value} tags={tags} onChange={onChange} />;
}
