import Designer from "@/components/designer";
import { NAME } from "@/typescript/constants";

export default function Home() {
  return (
    <main>
      <div className="max-w-3xl mx-auto text-center px-4 pt-10 pb-2">
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">
          {NAME}
        </h1>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="glass-card rounded-3xl overflow-hidden">
          <Designer />
        </div>
      </div>
    </main>
  );
}
