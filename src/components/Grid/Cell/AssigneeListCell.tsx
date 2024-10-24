import { User } from "@/app/grid/types";
import { AssigneeCell } from "@/components/Grid/Cell/AssigneeCell";

interface Props {
  value: User[];
}

export function AssigneeListCell({ value }: Props) {
  return (
    <div className="flex gap-2">
      {value.map((assignee) => (
        <AssigneeCell key={assignee.id} value={assignee} />
      ))}
    </div>
  );
}
