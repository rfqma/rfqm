import Navigation from "@/components/navigation";
import Link from "next/link";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row min-h-screen font-[family-name:var(--font-chivo-mono)] p-3">
      <Navigation />
      {children}
      <section className="flex flex-col md:max-w-[150px] w-full md:w-fit items-end md:items-start">
        <h1 className="text-xs font-normal">
          &copy; 2025 COPYRIGHT BY{" "}
          <Link
            href={"https://github.com/rfqma"}
            target="_blank"
            className="hover:underline"
          >
            RIFQI MAULANA
          </Link>
        </h1>
      </section>
    </main>
  );
}
