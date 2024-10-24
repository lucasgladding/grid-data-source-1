import { Ticket, User } from "@/app/grid/types";
import { faker } from "@faker-js/faker";

function createAssignee(): User {
  return {
    id: faker.string.uuid(),
    name: faker.name.firstName(),
    image: faker.image.url(),
  };
}

function createTicket(): Ticket {
  return {
    id: faker.string.uuid().slice(0, 5),
    name: faker.lorem.sentence(3),
    assignees: [
      createAssignee(),
      createAssignee(),
      createAssignee(),
      createAssignee(),
      createAssignee(),
    ],
  };
}

export const data: Ticket[] = [
  createTicket(),
  createTicket(),
  createTicket(),
  createTicket(),
  createTicket(),
];
