import { User } from "@/data/types";
import { Avatar } from "@mui/material";

interface Props {
  value: User;
}

export function AssigneeGroupCell({ value }: Props) {
  const size = 25;
  return (
    <Avatar
      alt={value.name}
      sx={{ width: size, height: size }}
      variant="rounded"
    />
  );
}
