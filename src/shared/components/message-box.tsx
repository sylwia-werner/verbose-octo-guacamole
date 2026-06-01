interface MessageBoxProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function MessageBox({ title, description, children }: MessageBoxProps) {
  return (
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {description && (
        <p className="text-muted-foreground max-w-md">{description}</p>
      )}
      {children}
    </div>
  );
}
