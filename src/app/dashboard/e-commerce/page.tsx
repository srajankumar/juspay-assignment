import { BarChartComponent } from "@/components/e-commerce/bar-chart";
import Cards from "@/components/e-commerce/cards";
import { Revenue } from "@/components/e-commerce/revenue-chart";
import RevenueByLocation from "@/components/e-commerce/revenue-by-location";
import TopSellingProducts from "@/components/e-commerce/top-selling-products";

export default function ECommerce() {
  return (
    <main className="flex flex-col gap-5 pb-20">
      <h1 className="font-semibold">eCommerce</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <Cards />
        <BarChartComponent />
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <Revenue />
        <RevenueByLocation />
      </div>
      <div className="grid lg:grid-cols-3 gap-4">
        <TopSellingProducts />
      </div>
    </main>
  );
}
