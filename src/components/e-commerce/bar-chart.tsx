"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const description = "Overlapping bars: projections behind actuals";

const chartData = [
  { month: "January", projections: 21000000, actuals: 19000000 },
  { month: "February", projections: 27000000, actuals: 22000000 },
  { month: "March", projections: 22000000, actuals: 18000000 },
  { month: "April", projections: 29000000, actuals: 23000000 },
  { month: "May", projections: 19000000, actuals: 16000000 },
  { month: "June", projections: 27000000, actuals: 23000000 },
];

const chartConfig = {
  projections: {
    label: "Projections",
    color: "var(--secondary-cyan)",
  },
  actuals: {
    label: "Actuals",
    color: "var(--secondary-cyan)",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <div className="p-5 rounded-xl bg-primary-light">
      <h2 className="font-semibold mb-6">Projections vs Actuals</h2>
      <div>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            barGap={-18}
            barCategoryGap="20%"
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              ticks={[0, 10000000, 20000000, 30000000]}
              tickFormatter={(value) => {
                if (value === 0) return "0";
                return `${value / 1000000}M`;
              }}
            />
            <Bar
              dataKey="projections"
              fill="var(--color-projections)"
              fillOpacity={0.28}
              barSize={18}
              radius={[6, 6, 6, 6]}
            />

            <Bar
              dataKey="actuals"
              fill="var(--color-actuals)"
              barSize={18}
              radius={[6, 6, 6, 6]}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
}
