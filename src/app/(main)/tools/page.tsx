import IconCloud from "@/components/icon-cloud";

const iconSlugs = [
  "typescript",
  "javascript",
  "dart",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  // 'amazonaws',
  "googlecloud",
  "mongodb",
  "postgresql",
  "firebase",
  "nginx",
  // "vercel",
  "docker",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "tailwindcss",
  "adobepremierepro",
  "nextui",
  "nextcloud",
  "hono",
  "contabo",
  "ubuntu",
  "php",
  "phpmyadmin",
  "laravel",
  "supabase",
  "mysql",
  "cloudflare",
  "cloudinary",
  "cplusplus",
  "python",
  "adobeaftereffects",
  "davinciresolve",
  "adobelightroomclassic",
];

export default function Tools() {
  return (
    <section className="flex h-screen md:items-center md:justify-center mt-10 md:mt-0 w-full">
      <div className="flex flex-col items-start justify-start max-w-xl gap-2">
        <h2 className=" rounded-lg text-sm font-medium">
          TOOLS OR TECHNOLOGIES I&#39;VE BEEN WORKING WITH
        </h2>
        <div className="relative flex w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg bg-custom-background p-0 md:p-8">
          <IconCloud iconSlugs={iconSlugs} />
        </div>
      </div>
    </section>
  );
}

// p-2 border border-[#ededed]
