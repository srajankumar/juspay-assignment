import { TrendingDown, TrendingUp } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";

export default function Cards() {
  const data = [
    {
      id: 1,
      title: "Customers",
      value: "3,781",
      change: "+11.01",
      background: "primary-blue",
    },
    {
      id: 2,
      title: "Orders",
      value: "1,218",
      change: "-0.03",
      background: "primary-light",
    },
    {
      id: 3,
      title: "Revenue",
      value: "$695",
      change: "+15.03",
      background: "primary-light",
    },
    {
      id: 4,
      title: "Customers",
      value: "30.1%",
      change: "+6.08",
      background: "primary-purple",
    },
  ];

  const bgMap: Record<string, string> = {
    "primary-blue": "bg-primary-blue",
    "primary-light": "bg-primary-light",
    "primary-purple": "bg-primary-purple",
  };

  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      {data.map((item) => {
        return (
          <div
            key={item.id}
            className={cn(
              "p-5 rounded-xl",
              bgMap[item.background] ?? item.background,
              item.background !== "primary-light" ? "dark:text-black" : ""
            )}
          >
            <h2 className="font-semibold">{item.title}</h2>
            <div className="grid grid-cols-2 gap-3">
              <p className="font-semibold text-2xl">{item.value}</p>
              <span className="flex text-xs items-center justify-center gap-1">
                {item.change}%{" "}
                {parseFloat(item.change) > 0 ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
