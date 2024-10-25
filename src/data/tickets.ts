import { faker } from "@faker-js/faker";
import { Ticket, User } from "@/data/types";
import { capitalize, times } from "@/data/helpers";

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

export const tickets: Ticket[] = times(10, () => createTicket());
