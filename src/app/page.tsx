import Products from "@/components/Products";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-900 text-slate-300">
      <Products />
    </main>
  );
}
