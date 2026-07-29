import type { Experience, Project, Social } from "@/types";

const EXPERIENCES: Experience[] = [
  {
    startTime: "2025-01-01",
    endTime: null,
    site: "Techave",
    role: "Frontend Developer",
  },
  {
    startTime: "2023-07-01",
    endTime: "2023-09-30",
    site: "PT. Angkasa Pura I, Yogyakarta International Airport",
    role: "Airport Quality Management Staff Intern",
  },
  {
    startTime: "2023-04-01",
    endTime: "2023-05-31",
    site: "Techave",
    role: "Frontend Developer Freelance",
  },
  {
    startTime: "2020-12-01",
    endTime: "2021-11-30",
    site: "Mora Studio",
    role: "Videographer Freelance",
  },
];

const SOCIALS: Social[] = [
  {
    label: "Email",
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
    description: "Building construction company landing page",
    href: "https://cknkonstruksi.com",
    year: "2025",
  },
  {
    title: "Donahue",
    description: "Fashion bag brand landing site",
    href: "https://donahuejogja.com",
    year: "2025",
  },
  {
    title: "Kawan Antar",
    description: "Localized transportation service platform",
    href: "https://kawanantar.com",
    year: "2025",
  },
];

export { EXPERIENCES, PROJECTS, SOCIALS };
