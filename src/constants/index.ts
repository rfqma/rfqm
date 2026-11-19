import type { Experience, Project } from "@/types";

const EXPERIENCES: Experience[] = [
  {
    startTime: "2025-01-01",
    endTime: null,
    site: "Techave",
    role: "Frontend Engineer",
  },
  {
    startTime: "2024-02-01",
    endTime: "2024-06-01",
    site: "PT. Otak Kanan",
    role: "Fullstack Web Developer Intern",
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

const PROJECTS: Project[] = [
  {
    title: "The Tuan Kuase",
    description:
      "Private club website for programs, expeditions, and publications with content management system.",
    href: "https://thetuankuase.id",
    year: "2026",
  },
  {
    title: "Klinik Adera",
    description:
      "Healthcare clinic website with doctor directory, health calculator, and content management system.",
    href: "https://klinikadera.co.id",
    year: "2026",
  },
  // {
  //   title: "Chandra Karya Nusantara",
  //   description: "Building construction company landing website with content management system.",
  //   href: "https://cknkonstruksi.com",
  //   year: "2025",
  // },
  // {
  //   title: "Donahue",
  //   description: "Luxury fashion bag landing website with content management system.",
  //   href: "https://donahuejogja.com",
  //   year: "2025",
  // },
  // {
  //   title: "Kawan Antar",
  //   description: "WhatsApp based platform that connects customers with local drivers.",
  //   href: "https://kawanantar.rfqm.me",
  //   year: "2025",
  // },
];

const OSS: Project[] = [
  {
    title: "pgwarden",
    description: "Docker first PostgreSQL backup-restore, to-from S3-compatible storage.",
    href: "https://github.com/rfqma/pgwarden",
    year: "2026",
  },
];

export { EXPERIENCES, OSS, PROJECTS };
