import { Attachment } from "@/data/types";
import { AttachmentGroupCell } from "@/components/Grid/Cell/AttachmentGroupCell";

interface Props {
  value: Attachment[];
}

export function AttachmentGroup({ value }: Props) {
  return (
    <div className="h-full w-full flex items-center gap-x-4">
      {value.map((attachment) => (
        <AttachmentGroupCell key={attachment.id} value={attachment} />
      ))}
    </div>
  );
}
