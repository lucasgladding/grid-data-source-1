import { User } from "@/data/types";
import { AvatarGroup } from "@mui/material";
import { AssigneeGroupCell } from "@/components/Grid/Cell/AssigneeGroupCell";

interface Props {
  value: User[];
}

export function AssigneeGroup({ value }: Props) {
  return (
    <div className="h-full w-full flex items-center">
      <AvatarGroup>
        {value.map((assignee) => (
          <AssigneeGroupCell key={assignee.id} value={assignee} />
        ))}
      </AvatarGroup>
    </div>
  );
}
