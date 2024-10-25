import { AgGridReact } from "ag-grid-react";
import { ColDef } from "ag-grid-community";
import { AssigneeGroup } from "@/components/Grid/Cell/AssigneeGroup";
import { AttachmentGroup } from "@/components/Grid/Cell/AttachmentGroup";
import { Ticket } from "@/data/types";
import { tickets } from "@/data/tickets";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

type Column = ColDef<Ticket>;

const columns: Column[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Ticket", width: 400 },
  { field: "assignees", cellRenderer: AssigneeGroup },
  { field: "attachments", cellRenderer: AttachmentGroup, width: 400 },
];

export function SampleGrid() {
  return (
    <div className="ag-theme-quartz" style={{ height: 800 }}>
      <AgGridReact rowData={tickets} columnDefs={columns} />
    </div>
  );
}
