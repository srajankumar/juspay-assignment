import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Cards() {
  const data = [
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      icon: <ArrowUpRight className="w-3 h-3" />,
      background: "primary-blue",
    },
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      background: "primary-light",
      icon: <ArrowUpRight className="w-3 h-3" />,
    },
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      background: "primary-light",
      icon: <ArrowUpRight className="w-3 h-3" />,
    },
    {
      title: "Customers",
      value: "3,781",
      change: "+11.01%",
      background: "primary-purple",
      icon: <ArrowUpRight className="w-3 h-3" />,
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 grid-cols 1 gap-4">
      {data.map((item) => (
        <div
          key={item.title}
          className={`p-5 rounded-xl bg-${item.background}`}
        >
          <h2 className="font-semibold">{item.title}</h2>
          <div className="grid grid-cols-2 gap-3">
            <p className="font-semibold text-2xl">{item.value}</p>
            <span className="flex text-xs items-center justify-center gap-1">
              {item.change} {item.icon}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
