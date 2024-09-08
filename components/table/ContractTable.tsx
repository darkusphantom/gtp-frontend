import { useState } from "react";
import { Table, TableBody, TableHead, TableRow } from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/DropDownMenu";
import { Button } from "../ui/Button";
import {
  Column,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";

interface DataTableColumnHeaderProps<TData, TValue>
  extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export default function ContractTableContainer({ columns, data }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead key={header.id} colSpan={header.colSpan}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
              </TableHead>
            );
          })}
        </TableRow>
      ))}
      {/* <TableHeader>
        <TableHeaderRow columns={columns} />
      </TableHeader>*/}
      <TableBody>
        <TableRow> Dorime</TableRow>
        {/* {(!sortOrder
          ? Object.keys(sortedContracts)
          : Object.keys(sortedContracts).reverse()
        )
          .slice(0, maxDisplayedContracts)
          .map((key, i) => (
            <ContractRowItem
              key={key}
              rowKey={key}
              i={i}
              selectedContract={selectedContract}
              sortedContracts={sortedContracts}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              setSelectedContract={setSelectedContract}
            />
          ))} */}
      </TableBody>
    </Table>
  );
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className,
}: DataTableColumnHeaderProps<TData, TValue>) {
  if (!column.getCanSort() && !column.getCanHide()) {
    return <div className={cn(className)}>{title}</div>;
  }

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label={
              column.getIsSorted() === "desc"
                ? "Sorted descending. Click to sort ascending."
                : column.getIsSorted() === "asc"
                ? "Sorted ascending. Click to sort descending."
                : "Not sorted. Click to sort ascending."
            }
            variant="ghost"
            size="sm"
            className="-ml-3 h-8 data-[state=open]:bg-accent"
          >
            <span>{title}</span>
            {column.getCanSort() && column.getIsSorted() === "desc"
              ? "arrowdown"
              : column.getIsSorted() === "asc"
              ? "arrowup"
              : "caretsort"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start"></DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
