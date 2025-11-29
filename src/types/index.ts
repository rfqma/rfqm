import type { IconifyIcon } from "@iconify/react";

interface Social {
  label: string;
  href: string;
  target: string;
  icon: string | IconifyIcon;
}

interface Experience {
  startTime: string;
  endTime?: string | null;
  site: string;
  role: string;
}

interface Project {
  title: string;
  description: string;
  href: string;
  year: string;
}

export type { Social, Experience, Project };
