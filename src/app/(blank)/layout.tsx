import Navigation from "@/components/navigation";
import Link from "next/link";

export default function BlankLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-screen font-[family-name:var(--font-chivo-mono)]">
      {children}
    </main>
  );
}
