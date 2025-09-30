"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuData {
  label: string;
  href: string;
  target: string;
  key: string;
}

export const MENUS: MenuData[] = [
  {
    label: "HOME",
    href: "/",
    target: "_self",
    key: "home",
  },
  {
    label: "SOCIALS",
    href: "/socials",
    target: "_self",
    key: "socials",
  },
  {
    label: "TOOLS",
    href: "/tools",
    target: "_self",
    key: "tools",
  },

  {
    label: "EXPERIENCES",
    href: "/experiences",
    target: "_self",
    key: "experiences",
  },
  // {
  //   label: "RESUME",
  //   href: "https://nc.rfqm.xyz/s/pMmFQyJcdMP4eXW",
  //   target: "_blank",
  //   key: "resume",
  // },
  {
    label: "GALLERY",
    href: "https://www.pexels.com/@maruarchive/",
    target: "_blank",
    key: "gallery"
  }
];

const Navigation = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col min-w-[200px]">
      <h1 className="text-sm">
        RFQMA/MARUARCHIVE/{pathname.toUpperCase().replace("/", "")}
      </h1>
      <ul>
        {MENUS.map((item) => {
          return (
            <li key={item.key} className="-mb-1">
              <Link
                href={item.href}
                target={item.target}
                className="flex items-center gap-1 w-fit"
              >
                {pathname.includes(item.key) || pathname === item.href ? (
                  <span className="text-[10px]">&#9632;</span>
                ) : (
                  <span className="text-[10px] text-[#2B2B2B]">&#9632;</span>
                )}
                <span className={`hover:underline text-sm ${pathname.includes(item.key) || pathname === item.href ? "underline" : ""}`}>{item.label}</span>
              </Link>
            </li>
          );
        })}
        
      </ul>
    </section>
  );
};

export default Navigation;
