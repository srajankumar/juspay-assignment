import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const TOP_SELLING_PRODUCTS = [
  {
    id: "p1",
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
  },
  {
    id: "p2",
    name: "Macro Lightweight Shirt",
    price: 128.5,
    quantity: 37,
  },
  {
    id: "p3",
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
  },
  {
    id: "p4",
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
  },
  {
    id: "p5",
    name: "Macro Shoes",
    price: 79.49,
    quantity: 64,
  },
];

export default function TopSellingProducts() {
  return (
    <div className="p-5 overflow-hidden rounded-xl bg-primary-light lg:col-span-2">
      <h2 className="font-semibold mb-3">Top Selling Products</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {TOP_SELLING_PRODUCTS.map((p) => (
            <TableRow key={p.id}>
              <TableCell>{p.name}</TableCell>
              <TableCell>${p.price.toFixed(2)}</TableCell>
              <TableCell>{p.quantity}</TableCell>
              <TableCell>${(p.price * p.quantity).toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
