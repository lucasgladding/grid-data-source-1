export interface User {
  id: string;
  name: string;
  image: string;
}

export interface Ticket {
  id: string;
  name: string;
  assignees: User[];
}
