export function capitalize(input: string): string {
  return input[0].toUpperCase() + input.slice(1);
}

export function times<T>(count: number, fn: () => T): T[] {
  return new Array(count).fill(0).map(() => {
    return fn();
  });
}
