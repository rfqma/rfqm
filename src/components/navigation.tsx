"use client";

import { MENUS } from "@/constants/menu.constant";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <section className="flex flex-col min-w-[200px]">
      <h1 className="text-sm font-medium">
        RFQMA/MARUARCHIVE/{pathname.toUpperCase().replace("/", "")}
      </h1>
      <ul>
        {MENUS.map((item) => {
          return (
            <li key={item.key} className="-mb-1">
              <Link
                href={item.href}
                target={item.target}
                className="text-sm font-medium flex items-center gap-1"
              >
                {pathname.includes(item.key) || pathname === item.href ? (
                  <span className="text-xs">&#9632;</span>
                ) : (
                  <span className="text-xs text-[#2B2B2B]">&#9632;</span>
                )}
                <span className="hover:underline">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Navigation;
