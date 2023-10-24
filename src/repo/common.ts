export function excludeDraft<T extends { draft: boolean }>(arr: T[]) {
  if (process.env.NODE_ENV === 'development') {
    return arr;
  }

  return arr.filter((post) => post.draft !== true);
}
