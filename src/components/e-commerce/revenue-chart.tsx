"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", currentWeek: 12000000, previousWeek: 8000000 },
  { month: "Feb", currentWeek: 10000000, previousWeek: 14000000 },
  { month: "Mar", currentWeek: 15000000, previousWeek: 12000000 },
  { month: "Apr", currentWeek: 18000000, previousWeek: 11000000 },
  { month: "May", currentWeek: 20000000, previousWeek: 19000000 },
  { month: "Jun", currentWeek: 22000000, previousWeek: 21000000 },
];

export function RevenueChart() {
  return (
    <div className="p-5 overflow-hidden rounded-xl bg-primary-light col-span-2">
      <div className="flex items-center justify-between mb-6 gap-5">
        <h2 className="font-semibold">Revenue</h2>
        <div className="flex lg:gap-6 gap-2 text-xs flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 shrink-0 bg-primary-brand rounded-full" />
            <span>
              Current Week <span className="font-semibold">$58,211</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 shrink-0 bg-secondary-cyan rounded-full" />
            <span>
              Previous Week <span className="font-semibold">$68,768</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <ResponsiveContainer width="100%" height={300}>
          {(() => {
            const step = 10_000_000;
            const max = Math.max(
              ...data.flatMap((d) => [d.currentWeek, d.previousWeek])
            );
            const maxTick = Math.ceil(max / step) * step;
            const ticks = Array.from(
              { length: Math.floor(maxTick / step) + 1 },
              (_, i) => i * step
            );

            return (
              <LineChart data={data} margin={{ right: 12, left: -10 }}>
                <CartesianGrid stroke="var(--border)" vertical={false} />
                <XAxis
                  className="text-sm"
                  dataKey="month"
                  stroke="#9ca3af"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={10}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <YAxis
                  className="text-sm"
                  ticks={ticks}
                  tickMargin={10}
                  domain={[0, maxTick]}
                  tickFormatter={(value: number) =>
                    `${(value / 1000000).toFixed(0)} M`
                  }
                  tickLine={false}
                  axisLine={false}
                  stroke="#9ca3af"
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "var(--background)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                  formatter={(value: number) =>
                    `$${(value / 1000000).toFixed(1)}M`
                  }
                />
                <Line
                  type="monotone"
                  dataKey="currentWeek"
                  stroke="var(--primary-brand)"
                  strokeWidth={2}
                  dot={false}
                  strokeDasharray="5 5"
                />
                <Line
                  type="monotone"
                  dataKey="previousWeek"
                  strokeWidth={2}
                  stroke="#A8C5DA"
                  dot={false}
                />
              </LineChart>
            );
          })()}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
