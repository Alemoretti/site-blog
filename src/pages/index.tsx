import { Button } from "@/components/ui/button";
import { Header } from "@/components/header/header";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="min-h-screen min-w-full bg-slate-500 p-8">
        <Header />
        <div className="mt-4 text-white">
          <h1 className="text-2xl font-bold">Hello World!</h1>
        </div>
      </div>
    </div>
  );
}
