import { SmoothCursor } from "@/components/smooth-cursor";
import { Home } from "@/features/home/Home";

export function App() {
  return (
    <>
      <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
        <Home />
      </main>
      <SmoothCursor />
    </>
  );
}
