interface Response<T> {
  message: string;
  data: T;
}

interface Image {
  type: "Photo" | "Video";
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
}

interface SocialData {
  label: string;
  href: string;
  target: string;
}

export interface ExperienceData {
  site: string;
  time: string;
  role: string;
}

export type { Response, Image, SocialData };
