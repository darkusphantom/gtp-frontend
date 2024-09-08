import { Button } from "@/components/ui/Button";
import { TableHead, TableRow } from "@/components/ui/table";

export const TableHeaderRow = (columns: any[]) => {
  return (
    <TableRow>
      {columns.map((header) => (
        <TableHead key={header.name} className={header.style}>
          {header.hasTooltip ? (
            <CheckboxDropdownMenu
              btnName={header.name}
              dropdownMenuLabel={header.name}
            />
          ) : (
            <span>{header.name}</span>
          )}
        </TableHead>
      ))}
    </TableRow>
  );
};

const CheckboxDropdownMenu = ({ btnName }: any) => {
  return (
    <Button variant="outline" className="bg-[#374240] rounded-xl">
      {btnName}
    </Button>
  );
};
