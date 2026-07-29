"use client";

import dynamic from "next/dynamic";

const Highlighter = dynamic(
  () => import("@/components/magicui/highlighter").then((mod) => mod.Highlighter),
  { ssr: false },
);

export { Highlighter };
