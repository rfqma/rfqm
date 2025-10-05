"use client";

import Link from "next/link";
import { useState } from "react";
import IconCloud from "@/components/icon-cloud";
import { SOCIALS, iconSlugs, EXPERIENCES } from "@/constants";

type Menu = "ABOUT" | "EXPERIENCES" | "SOCIALS" | "TOOLS" | "CREDITS";

export default function Desktop({
  onCloseAction,
}: {
  onCloseAction: () => void;
}) {
  const [selectedMenu, setSelectedMenu] = useState<Menu>("ABOUT");

  const renderMenu = () => {
    switch (selectedMenu) {
      case "ABOUT":
        return (
          <section className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start max-w-xl gap-2">
              <h2 className=" rounded-lg text-sm font-medium">Rifqi Maulana</h2>
              <div className="text-sm font-medium rounded-lg flex flex-col">
                <span>Based in Yogyakarta, Indonesia.</span>
                <span>
                  I create things people can click, swipe, and enjoy. 🧑‍💻
                </span>
              </div>
            </div>
          </section>
        );
      case "EXPERIENCES":
        return (
          <section className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start max-w-xl gap-2">
              <h2 className=" rounded-lg text-sm font-medium">
                quick summary of my most recent experiences
              </h2>
              <ul className="timeline timeline-vertical">
                {EXPERIENCES.map((item, index) => {
                  return (
                    <li key={index}>
                      {index !== 0 && <hr className="bg-custom-foreground" />}
                      <div className="timeline-middle">
                        {index !== EXPERIENCES.length - 1 ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-12a.75.75 0 00-1.5 0v4.25c0 .414.336.75.75.75h3a.75.75 0 000-1.5H10.75V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                      <div className="timeline-end timeline-box flex flex-col">
                        <span className="text-xs text-background">
                          {item.time}
                        </span>
                        <span className="text-sm font-semibold text-background">
                          {item.site}
                        </span>
                        <span className="textxs text-background">
                          {item.role}
                        </span>
                      </div>
                      {index !== EXPERIENCES.length - 1 && (
                        <hr className="bg-custom-foreground" />
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        );
      case "SOCIALS":
        return (
          <section className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start max-w-xl gap-2">
              <h2 className=" rounded-lg text-sm font-medium">
                reach me through my social media
              </h2>
              {SOCIALS.map((item, index) => {
                return (
                  <Link
                    className="rounded-lg text-sm font-medium hover:underline"
                    key={index}
                    href={item.href}
                    target={item.target}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      case "TOOLS":
        return (
          <section className="flex items-center justify-center w-full ">
            <div className="flex flex-col items-start justify-start max-w-xl gap-2">
              <h2 className=" rounded-lg text-sm font-medium">
                tools and technologies i&#39;ve been working with
              </h2>
              <div className="relative flex w-full max-w-2xl items-center justify-center overflow-hidden">
                <IconCloud iconSlugs={iconSlugs} />
              </div>
            </div>
          </section>
        );
      case "CREDITS":
        return (
          <section className="flex items-center justify-center w-full">
            <div className="flex flex-col items-start justify-start max-w-xl gap-2">
              <h2 className=" rounded-lg text-sm font-medium">Credits</h2>
              <div className="text-sm font-medium rounded-lg flex flex-col gap-2">
                <Link
                  href={"https://sketchfab.com/GianmArt"}
                  target="_blank"
                  className="hover:underline"
                >
                  Isometric Bedroom by Gianmarco
                </Link>
                <Link
                  href={"https://soundcloud.com/iamakz"}
                  target="_blank"
                  className="hover:underline"
                >
                  Background Music by tuael
                </Link>
                <h2 className="text-xs font-normal">
                  &copy; 2025 Copyright by{" "}
                  <Link
                    href={"https://github.com/rfqma"}
                    target="_blank"
                    className="hover:underline"
                  >
                    Rifqi Maulana
                  </Link>
                </h2>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-blue-950 bg-opacity-80 backdrop-blur-sm text-white p-8 z-10">
      <div className="w-full max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">My Desktop</h1>
          <button
            onClick={onCloseAction}
            className="bg-red-800 px-3 py-1 rounded hover:bg-red-900 cursor-pointer"
          >
            Exit
          </button>
        </div>

        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-4 items-start justify-start max-w-[100px]">
            {/* Contoh "Aplikasi" */}
            <div
              className="cursor-pointer hover:opacity-90 w-full text-white text-sm flex flex-col gap-1"
              onClick={() => setSelectedMenu("ABOUT")}
            >
              <span className="text-3xl">📄</span>
              <span>Me</span>
            </div>
            <div
              className="cursor-pointer hover:opacity-90 w-full text-white text-sm flex flex-col gap-1"
              onClick={() => setSelectedMenu("SOCIALS")}
            >
              <span className="text-3xl">📁</span>
              <span>Socials</span>
            </div>
            <div
              className="cursor-pointer hover:opacity-90 w-full text-white text-sm flex flex-col gap-1"
              onClick={() => setSelectedMenu("TOOLS")}
            >
              <span className="text-3xl">🛠️</span>
              <span>Tools</span>
            </div>
            <div
              className="cursor-pointer hover:opacity-90 w-full text-white text-sm flex flex-col gap-1"
              onClick={() => setSelectedMenu("EXPERIENCES")}
            >
              <span className="text-3xl">💼</span>
              <span>Experiences</span>
            </div>
            <Link href={"https://www.pexels.com/@maruarchive/"} target="_blank">
              <div className="cursor-pointer hover:opacity-90 w-full text-white text-sm flex flex-col gap-1">
                <span className="text-3xl">🖼️</span>
                <span>Gallery</span>
              </div>
            </Link>
            <div
              className="cursor-pointer hover:opacity-90 w-full text-white text-sm flex flex-col gap-1"
              onClick={() => setSelectedMenu("CREDITS")}
            >
              <span className="text-3xl">ℹ️</span>
              <span>Credits</span>
            </div>
          </div>
          {renderMenu()}
        </div>
      </div>
    </div>
  );
}
