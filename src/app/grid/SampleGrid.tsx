import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef } from "ag-grid-community";
import { Ticket } from "@/data/types";
import { tickets } from "@/data/tickets";
import { AssigneeGroup } from "@/components/Grid/Cell/AssigneeGroup";

type Column = ColDef<Ticket>;

const columns: Column[] = [
  { field: "id", headerName: "ID" },
  { field: "name", headerName: "Ticket", width: 400 },
  { field: "assignees", cellRenderer: AssigneeGroup },
];

export function SampleGrid() {
  return (
    <div className="ag-theme-quartz" style={{ height: 800 }}>
      <AgGridReact rowData={tickets} columnDefs={columns} />
    </div>
  );
}
