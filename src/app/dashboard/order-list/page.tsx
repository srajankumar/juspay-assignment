"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Calendar,
  ListFilter,
  MoreHorizontal,
  Plus,
  Search,
} from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";

const data: Orders[] = [
  {
    id: "#CMP801",
    user: "Natali Craig",
    avatar: "/assets/users/natali_craig.png",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CMP802",
    user: "Kate Morrison",
    avatar: "/assets/users/kate_morrison.png",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CMP803",
    user: "Drew Cano",
    avatar: "/assets/users/drew_cano.png",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CMP804",
    user: "Orlando Diggs",
    avatar: "/assets/users/orlando_diggs.png",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CMP805",
    user: "Andi Lane",
    avatar: "/assets/users/andi_lane.png",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
  {
    id: "#CMP801",
    user: "Natali Craig",
    avatar: "/assets/users/natali_craig.png",
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CMP802",
    user: "Kate Morrison",
    avatar: "/assets/users/kate_morrison.png",
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CMP803",
    user: "Drew Cano",
    avatar: "/assets/users/drew_cano.png",
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CMP804",
    user: "Orlando Diggs",
    avatar: "/assets/users/orlando_diggs.png",
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CMP805",
    user: "Andi Lane",
    avatar: "/assets/users/andi_lane.png",
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];

export type Orders = {
  id: string;
  user: string;
  avatar: string;
  project: string;
  address: string;
  date: string;
  status: "Rejected" | "Approved" | "Pending" | "In Progress" | "Complete";
};

export const columns: ColumnDef<Orders>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Order ID",
    cell: ({ row }) => <div>{row.getValue("id")}</div>,
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user = row.original.user;
      const avatar = row.original.avatar;
      const initials = user
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
      return (
        <div className="flex items-center gap-2">
          <Avatar>
            <AvatarImage src={avatar} alt={user} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <span>{user}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "project",
    header: "Project",
    cell: ({ row }) => <div>{row.getValue("project")}</div>,
  },
  {
    accessorKey: "address",
    header: "Address",
    cell: ({ row }) => <div>{row.getValue("address")}</div>,
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4" />
        <span>{row.getValue("date")}</span>
      </div>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const dotColors: Record<Orders["status"], string> = {
        "In Progress": "#8A8CD9",
        Complete: "#4AA785",
        Pending: "#59A8D4",
        Approved: "#FFC555",
        Rejected: "var(--rejected)",
      };
      return (
        <div className="flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: dotColors[status as Orders["status"]] }}
          ></div>
          <span style={{ color: dotColors[status as Orders["status"]] }}>
            {String(status)}
          </span>
        </div>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const order = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                navigator.clipboard.writeText(order.id);
                toast.success("Order ID copied to clipboard");
              }}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View user</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export default function OrderList() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <main className="flex flex-col gap-5 pb-0">
      <h1 className="font-semibold">Order List</h1>
      <div className="flex items-center p-2 rounded-xl bg-primary-light justify-between">
        <div className="flex items-center gap-2">
          <Button
            size={"icon-sm"}
            variant={"ghost"}
            className={cn("size-7")}
            onClick={() => {
              toast.error("Fail to add new order");
            }}
            aria-label="Fail to add new order"
          >
            <Plus className="w-4 h-4" />
          </Button>
          <Button
            size={"icon-sm"}
            variant={"ghost"}
            className={cn("size-7")}
            onClick={() => {
              const current = table
                .getState()
                .sorting.find((s) => s.id === "id");
              if (!current) {
                // set ascending
                table.setSorting([{ id: "id", desc: false }]);
              } else if (!current.desc) {
                // set descending
                table.setSorting([{ id: "id", desc: true }]);
              } else {
                // clear sorting
                table.setSorting([]);
              }
            }}
            aria-label="Toggle sort by Order ID"
          >
            <ArrowUpDown className="w-4 h-4" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                size={"icon-sm"}
                variant={"ghost"}
                className={cn("size-7")}
              >
                <ListFilter />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <Input
            className={"h-7 pl-7 w-40 shadow-none border-2"}
            placeholder="Search"
            value={(table.getColumn("user")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("user")?.setFilterValue(event.target.value)
            }
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </div>
      </div>
      <div className="overflow-hidden">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  );
}
