import { Attachment } from "@/data/types";
import { LinkIcon } from "@heroicons/react/16/solid";

interface Props {
  value: Attachment;
}

export function AttachmentGroupCell({ value }: Props) {
  return (
    <div className="flex items-center gap-x-0.5">
      <LinkIcon className="size-4" />
      {value.name}
    </div>
  );
}
