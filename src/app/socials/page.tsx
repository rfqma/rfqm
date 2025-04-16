import { SOCIALS } from "@/constants/social.constant";
import Link from "next/link";

export default function Socials() {
  return (
    <section className="flex min-h-screen md:items-center md:justify-center mt-10 md:mt-0 w-full">
      <div className="flex flex-col items-start justify-start max-w-xl gap-2">
        <h2 className=" rounded-lg text-sm font-medium">
          REACH ME THROUGH MY SOCIALS
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
}
