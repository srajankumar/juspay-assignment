import Cards from "@/components/e-commerce/cards";

export default function ECommerce() {
  return (
    <main className="flex flex-col gap-5">
      <h1 className="font-semibold">eCommerce</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <Cards />
      </div>
    </main>
  );
}
