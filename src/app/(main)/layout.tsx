import Copyright from "@/components/copyright";
import Navigation from "@/components/navigation";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-col md:flex-row h-screen p-3">
      <Navigation />
      {children}
      <Copyright />
    </main>
  );
}
