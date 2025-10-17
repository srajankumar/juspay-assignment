"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Separator } from "../ui/separator";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--secondary-cyan)",
  },
} satisfies ChartConfig;

export function Revenue() {
  return (
    <div className="p-5 overflow-hidden rounded-xl bg-primary-light col-span-2">
      <div className="flex items-center mb-6 gap-5">
        <h2 className="font-semibold">Revenue</h2>
        <div className="h-5 w-[1px] rounded-full bg-border" />
        <div className="text-xs flex items-center space-x-4">
          <div className="flex items-center gap-1">
            <div className="bg-primary w-2 h-2 rounded-full" />
            <p>Current Week</p>
            <span>$58,211</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="bg-secondary-cyan w-2 h-2 rounded-full" />
            <p>Previous Week</p>
            <span>$68,768</span>
          </div>
        </div>
      </div>
      <ChartContainer config={chartConfig}>
        <LineChart
          accessibilityLayer
          data={chartData}
          margin={{
            left: 12,
            right: 12,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Line
            dataKey="desktop"
            type="monotone"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
          <Line
            dataKey="mobile"
            type="monotone"
            stroke="var(--color-mobile)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
