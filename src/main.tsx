import { SmoothCursor } from "@/components/smooth-cursor";
import { Home } from "@/pages/Home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/manrope";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="max-w-2xl mx-auto px-6 py-12 sm:py-16">
      <Home />
    </main>
    <SmoothCursor />
  </StrictMode>,
);
