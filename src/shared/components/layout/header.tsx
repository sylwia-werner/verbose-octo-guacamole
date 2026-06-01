import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/recipes" className="text-lg font-semibold tracking-tight">
          Recipes
        </Link>
      </div>
    </header>
  );
}
