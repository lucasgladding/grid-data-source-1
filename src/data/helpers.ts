import { faker } from "@faker-js/faker";

export function capitalize(input: string): string {
  return input[0].toUpperCase() + input.slice(1);
}

export function count(max: number = 5) {
  return faker.number.int({ min: 1, max });
}

export function times<T>(count: number, fn: () => T): T[] {
  return new Array(count).fill(0).map(() => {
    return fn();
  });
}
