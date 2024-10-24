import { User } from "@/app/grid/types";
import { Avatar } from "@mui/material";

interface Props {
  value: User;
}

function initials(name: string): string {
  return name
    .split(" ")
    .map((word) => word.slice(0, 1))
    .join("");
}

export function AssigneeCell({ value }: Props) {
  const { name } = value;
  const chars = initials(name);
  const size = 24;

  return (
    <div className="flex gap-[6px] items-center">
      <Avatar sx={{ fontSize: "14px", width: size, height: size }}>
        {chars}
      </Avatar>
      {value.name}
    </div>
  );
}
