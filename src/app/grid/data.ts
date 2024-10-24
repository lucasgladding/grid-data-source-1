import { Ticket, User } from "@/app/grid/types";
import { faker } from "@faker-js/faker";

function capitalize(input: string): string {
  return input[0].toUpperCase() + input.slice(1);
}

function times<T>(count: number, fn: () => T): T[] {
  return new Array(count).fill(0).map(() => {
    return fn();
  });
}

function createAssignee(): User {
  return {
    id: faker.string.uuid(),
    name: faker.name.firstName(),
    image: faker.image.url(),
  };
}

function createTicket(): Ticket {
  const count = faker.number.int({ min: 1, max: 5 });
  return {
    id: faker.string.uuid().slice(0, 5),
    name: capitalize(faker.lorem.words(3)),
    assignees: times(count, () => createAssignee()),
  };
}

export const data: Ticket[] = [
  createTicket(),
  createTicket(),
  createTicket(),
  createTicket(),
  createTicket(),
];
