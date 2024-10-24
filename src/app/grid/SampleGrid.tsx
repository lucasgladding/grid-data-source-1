import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef } from "ag-grid-community";
import { Ticket } from "@/app/grid/types";
import { data } from "@/app/grid/content";

type Column = ColDef<Ticket>;

const columns: Column[] = [
  { field: "id" },
  { field: "name" },
  { field: "assignee" },
];

export function SampleGrid() {
  return (
    <div className="ag-theme-quartz" style={{ height: 500 }}>
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
}
