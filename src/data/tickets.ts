import { faker } from "@faker-js/faker";
import { Attachment, Ticket, User } from "@/data/types";
import { capitalize, count, times } from "@/data/helpers";

function createAssignee(): User {
  return {
    id: faker.string.uuid(),
    name: faker.name.firstName(),
    image: faker.image.url(),
  };
}

function createAttachment(): Attachment {
  return { id: faker.string.uuid(), name: faker.lorem.word(), type: "docx" };
}

function createTicket(): Ticket {
  return {
    id: faker.string.uuid().slice(0, 5),
    name: capitalize(faker.lorem.words(3)),
    assignees: times(count(1, 5), () => createAssignee()),
    attachments: times(count(0, 2), () => createAttachment()),
  };
}

export const tickets: Ticket[] = times(10, () => createTicket());
