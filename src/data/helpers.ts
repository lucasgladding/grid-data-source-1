import { faker } from "@faker-js/faker";

export function capitalize(input: string): string {
  return input[0].toUpperCase() + input.slice(1);
}

export function count(min: number = 1, max: number = 5) {
  return faker.number.int({ min, max });
}

export function times<T>(count: number, fn: () => T): T[] {
  return new Array(count).fill(0).map(() => {
    return fn();
  });
}
