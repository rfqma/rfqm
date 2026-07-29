import type { Experience, Project, Social } from "@/types";

const EXPERIENCES: Experience[] = [
  {
    startTime: "2025-01-01",
    endTime: null,
    site: "Techave",
    role: "Frontend Developer",
    description:
      "Building modern web applications with React and Next.js, focusing on performance and user experience.",
  },
  {
    startTime: "2023-07-01",
    endTime: "2023-09-30",
    site: "PT. Angkasa Pura I, Yogyakarta International Airport",
    role: "Airport Quality Management Staff Intern",
    description:
      "Assisted in quality management processes and documentation for airport operations.",
  },
  {
    startTime: "2023-04-01",
    endTime: "2023-05-31",
    site: "Techave",
    role: "Frontend Developer Freelance",
    description:
      "Developed responsive websites and web applications for clients using modern frontend technologies.",
  },
  {
    startTime: "2020-12-01",
    endTime: "2021-11-30",
    site: "Mora Studio",
    role: "Videographer Freelance",
    description:
      "Created video content and visual stories for various clients and projects.",
  },
];

const SOCIALS: Social[] = [
  {
    label: "Mail",
    href: "mailto:hello@rfqm.me",
    target: "_blank",
    icon: "tabler:mail-filled",
  },
  {
    label: "GitHub",
    href: "https://github.com/rfqma",
    target: "_blank",
    icon: "tabler:brand-github-filled",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rfqma",
    target: "_blank",
    icon: "mdi:linkedin",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/maruarchive",
    target: "_blank",
    icon: "basil:instagram-solid",
  },
  {
    label: "Pexels",
    href: "https://www.pexels.com/@rifqi-maulana-286675026/",
    target: "_blank",
    icon: "simple-icons:pexels",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@maruarchive",
    target: "_blank",
    icon: "mdi:youtube",
  },
];

const PROJECTS: Project[] = [
  {
    title: "Chandra Karya Nusantara",
    description:
      "Building construction company landing page built with Next.js and Tailwind CSS, featuring modern design and responsive layout.",
    href: "https://cknkonstruksi.com",
    year: "2025",
  },
  {
    title: "Donahue",
    description:
      "Fashion bag brand landing site with elegant design, built using modern web technologies for optimal performance.",
    href: "https://donahuejogja.com",
    year: "2025",
  },
  {
    title: "Kawan Antar",
    description:
      "Localized transportation service platform, a ride-hailing solution adapted for the Indonesian market.",
    href: "https://kawanantar.com",
    year: "2025",
  },
];

export { EXPERIENCES, SOCIALS, PROJECTS };
