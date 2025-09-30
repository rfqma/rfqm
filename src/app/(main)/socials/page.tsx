import Link from "next/link";

interface SocialData {
  label: string;
  href: string;
  target: string;
}

const SOCIALS: SocialData[] = [
  {
    label: "INFO@RFQM.XYZ",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=info@rfqm.xyz",
    target: "_blank",
  },
  {
    label: "GITHUB",
    href: "https://github.com/rfqma",
    target: "_blank",
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/rfqma",
    target: "_blank",
  },
  {
    label: "INSTAGRAM",
    href: "https://instagram.com/maruarchive",
    target: "_blank",
  },
  {
    label: "PEXELS",
    href: "https://www.pexels.com/@rifqi-maulana-286675026/",
    target: "_blank",
  },
  {
    label: "YOUTUBE",
    href: "https://www.youtube.com/@maruarchive",
    target: "_blank",
  },
];

export default function Socials() {
  return (
    <section className="flex h-screen md:items-center md:justify-center mt-10 md:mt-0 w-full">
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
