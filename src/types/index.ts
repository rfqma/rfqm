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

export type { Experience, Project };
