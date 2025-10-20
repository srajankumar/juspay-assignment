"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#C6C7F8" },
  { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
  { name: "Sponsored", value: 154.02, color: "#95A4FC" },
  { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

export function TotalSalesChart() {
  return (
    <div className="p-5 overflow-hidden rounded-xl bg-primary-light">
      <h2 className="font-semibold mb-3">Revenue By Location</h2>

      <div className="flex flex-col items-center gap-6">
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="w-full space-y-2">
          {data.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between text-sm"
            >
              <div className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span>{item.name}</span>
              </div>
              <span>${item.value.toFixed(2)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
