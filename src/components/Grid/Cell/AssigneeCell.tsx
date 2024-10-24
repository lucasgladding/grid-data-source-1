import { User } from "@/app/grid/types";

interface Props {
  value: User;
}

export function AssigneeCell({ value }: Props) {
  return <div>{value.name}</div>;
}
