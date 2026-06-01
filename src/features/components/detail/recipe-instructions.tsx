interface RecipeInstructionsProps {
  instructions: string[];
}

export function RecipeInstructions({ instructions }: RecipeInstructionsProps) {
  return (
    <section aria-labelledby="instructions-heading">
      <h2
        id="instructions-heading"
        className="mb-4 text-xl font-semibold tracking-tight"
      >
        Instructions
      </h2>
      <ol className="space-y-4">
        {instructions.map((step, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <span
              className="bg-primary text-primary-foreground flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold"
              aria-label={`Step ${index + 1}`}
            >
              {index + 1}
            </span>
            <p className="mt-0.5">{step}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
