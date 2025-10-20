import React from "react";
import { Progress } from "@/components/ui/progress";
import WorldMap from "@/components/ui/world-map";

type Location = {
  name: string;
  value: number;
  amount: string;
};

const LOCATIONS: Location[] = [
  { name: "New York", value: 72, amount: "72K" },
  { name: "San Francisco", value: 39, amount: "39K" },
  { name: "Sydney", value: 25, amount: "25K" },
  { name: "Singapore", value: 61, amount: "61K" },
];

export default function RevenueByLocation() {
  return (
    <div className="p-5 overflow-hidden rounded-xl bg-primary-light lg:col-span-1 col-span-2">
      <h2 className="font-semibold mb-3">Revenue By Location</h2>
      <div>
        <WorldMap
          dots={[
            {
              start: {
                lat: 40.73061,
                lng: -73.935242,
              }, // New York
              end: {
                lat: 1.35,
                lng: 103.8,
              }, // Singapore
            },
            {
              start: {
                lat: 37.77,
                lng: -122.42,
              }, // San Francisco
              end: {
                lat: -33.87,
                lng: 151.21,
              }, // Sydney
            },
          ]}
        />
      </div>
      <div className="space-y-4">
        {LOCATIONS.map((loc) => (
          <div className="space-y-1" key={loc.name}>
            <div className="flex justify-between text-xs">
              <p>{loc.name}</p>
              <span>{loc.amount}</span>
            </div>
            <Progress value={loc.value} />
          </div>
        ))}
      </div>
    </div>
  );
}
