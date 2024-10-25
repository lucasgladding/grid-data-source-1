export interface Attachment {
  id: string;
  name: string;
  type: string;
}

export interface Ticket {
  id: string;
  name: string;
  assignees: User[];
  attachments: Attachment[];
}

export interface User {
  id: string;
  name: string;
  image: string;
}
