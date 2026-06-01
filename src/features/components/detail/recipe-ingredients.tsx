interface RecipeIngredientsProps {
  ingredients: string[];
}

export function RecipeIngredients({ ingredients }: RecipeIngredientsProps) {
  return (
    <section aria-labelledby="ingredients-heading">
      <h2
        id="ingredients-heading"
        className="mb-4 text-xl font-semibold tracking-tight"
      >
        Ingredients
      </h2>
      <ul className="space-y-2">
        {ingredients.map((ingredient) => (
          <li key={ingredient} className="flex items-start gap-2 text-sm">
            <span
              className="bg-foreground mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
              aria-hidden="true"
            />
            {ingredient}
          </li>
        ))}
      </ul>
    </section>
  );
}
