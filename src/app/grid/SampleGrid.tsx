import { AgGridReact } from "ag-grid-react"; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the Data Grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the Data Grid
import { ColDef } from "ag-grid-community";

interface Ticket {
  id: string;
  name: string;
  assignee: string;
}

type Column = ColDef<Ticket>;

const data: Ticket[] = [
  { id: "1", name: "Ticket 1", assignee: "Lucas" },
  { id: "2", name: "Ticket 2", assignee: "Jacob" },
  { id: "3", name: "Ticket 3", assignee: "Clara" },
];

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
