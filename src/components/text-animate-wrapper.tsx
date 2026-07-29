"use client";

import dynamic from "next/dynamic";

const TextAnimate = dynamic(
  () => import("@/components/magicui/text-animate").then((mod) => mod.TextAnimate),
  { ssr: false },
);

export { TextAnimate };
