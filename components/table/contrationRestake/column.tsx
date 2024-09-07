"use client";

import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";
import { ColumnDef } from "@tanstack/react-table";
import { Chains } from "@/types/api/ChainOverviewResponse";

export type Chain = {
  icon: string;
  address: number;
  name: string;
  category: string;
  subcategory: string;
  date_deployed: string;
};

export const columnsContractRestake: ColumnDef<Chains>[] = [
  {
    accessorKey: "Staker Address",
    header: "Staker Address",
    cell: ({ row }) => {
      const address = row.getValue("Staker Address") as string;

      return (
        <div className="flex items-center">
          {address}
          <Button
            variant="ghost"
            className="bg-transparent border-none p-0 ml-2"
            onClick={() => navigator.clipboard.writeText(address)}
            aria-label={"Copy completed"}
          >
            <Icon
              icon="feather:copy"
              className="w-5 h-5"
              aria-hidden="true"
            ></Icon>
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "Market Share",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          className="bg-transparent border-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          aria-label={
            column.getIsSorted() === "desc"
              ? "Sorted descending. Click to sort ascending."
              : column.getIsSorted() === "asc"
              ? "Sorted ascending. Click to sort descending."
              : "Not sorted. Click to sort ascending."
          }
        >
          Market Shared
          <span className="ml-2">
            {column.getCanSort() && column.getIsSorted() === "desc" ? (
              <Icon
                icon="feather:arrow-down"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : column.getIsSorted() === "asc" ? (
              <Icon
                icon="feather:arrow-up"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : (
              <></>
            )}
          </span>
        </Button>
      );
    },
  },
  {
    accessorKey: "ETH Restaked",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          className="bg-transparent border-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          aria-label={
            column.getIsSorted() === "desc"
              ? "Sorted descending. Click to sort ascending."
              : column.getIsSorted() === "asc"
              ? "Sorted ascending. Click to sort descending."
              : "Not sorted. Click to sort ascending."
          }
        >
          ETH Restaked
          <span className="ml-2">
            {column.getCanSort() && column.getIsSorted() === "desc" ? (
              <Icon
                icon="feather:arrow-down"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : column.getIsSorted() === "asc" ? (
              <Icon
                icon="feather:arrow-up"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : (
              <></>
            )}
          </span>
        </Button>
      );
    },
    cell: ({ row }) => {
      const subcategory = row.getValue("ETH Restaked") as string;

      return (
        <>
          <div
            className="text-center"
            onClick={() => console.log("Copiado")}
            aria-label={"Copy completed"}
          >
            {subcategory}
          </div>
        </>
      );
    },
  },
  {
    accessorKey: "Number of Strategies",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          className="bg-transparent border-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          aria-label={
            column.getIsSorted() === "desc"
              ? "Sorted descending. Click to sort ascending."
              : column.getIsSorted() === "asc"
              ? "Sorted ascending. Click to sort descending."
              : "Not sorted. Click to sort ascending."
          }
        >
          Number of Strategies
          <span className="ml-2">
            {column.getCanSort() && column.getIsSorted() === "desc" ? (
              <Icon
                icon="feather:arrow-down"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : column.getIsSorted() === "asc" ? (
              <Icon
                icon="feather:arrow-up"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : (
              <></>
            )}
          </span>
        </Button>
      );
    },
  },
  {
    accessorKey: "Most Used Strategy",
    header: ({ column }) => {
      return (
        <Button
          variant="outline"
          className="bg-transparent border-none"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          aria-label={
            column.getIsSorted() === "desc"
              ? "Sorted descending. Click to sort ascending."
              : column.getIsSorted() === "asc"
              ? "Sorted ascending. Click to sort descending."
              : "Not sorted. Click to sort ascending."
          }
        >
          Most Used Strategies
          <span className="ml-2">
            {column.getCanSort() && column.getIsSorted() === "desc" ? (
              <Icon
                icon="feather:arrow-down"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : column.getIsSorted() === "asc" ? (
              <Icon
                icon="feather:arrow-up"
                className="w-5 h-5"
                aria-hidden="true"
              />
            ) : (
              <></>
            )}
          </span>
        </Button>
      );
    },
  },
];
