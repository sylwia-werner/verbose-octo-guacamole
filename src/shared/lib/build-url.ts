export function buildUrl(
  path: string,
  params?: Record<string, string | number | undefined>
): string {
  const query: Record<string, string> = {};
  let interpolatedPath = path;

  for (const [key, value] of Object.entries(params ?? {})) {
    if (value === undefined || value === '') continue;
    const str = String(value);
    const replaced = interpolatedPath.replace(`:${key}`, str);
    if (replaced !== interpolatedPath) {
      interpolatedPath = replaced;
    } else {
      query[key] = str;
    }
  }

  const search = new URLSearchParams(query).toString();
  return search ? `${interpolatedPath}?${search}` : interpolatedPath;
}