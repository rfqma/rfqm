import Image from "next/image";
import Link from "next/link";
import { Highlighter } from "@/components/highlighter-wrapper";
import { Marquee } from "@/components/magicui/marquee";
import { TextAnimate } from "@/components/text-animate-wrapper";
import { EXPERIENCES, OSS, PROJECTS, SOCIALS } from "@/constants";
import ProjectCard from "./_components/ProjectCard";
import SocialChip from "./_components/SocialChip";
import { Timeline } from "./_components/Timeline";

const page = () => {
  return (
    <>
      <header className="py-6 flex items-center gap-4">
        <div className="relative size-11 outline select-none rounded-full outline-card-border overflow-hidden">
          <Image
            src={"/logo.png"}
            alt="Rifqi Maulana - Frontend Developer and Photographer"
            width={100}
            height={100}
            priority
          />
        </div>
        <div className="flex flex-col">
          <h1 className="leading-snug font-semibold text-lg">
            <TextAnimate
              animation="blurInUp"
              duration={0.8}
              by="character"
              once
              className="leading-snug font-semibold"
            >
              Rifqi Maulana
            </TextAnimate>
          </h1>
          <span className="leading-snug font-semibold text-foreground-muted whitespace-nowrap text-sm">
            Frontend Developer at{" "}
            <Link
              href={"https://techave.dev"}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors duration-300 ease-out hover:text-foreground"
            >
              Techave
            </Link>
          </span>
        </div>
      </header>

      <section className="pb-6">
        <p className="text-foreground-muted leading-relaxed text-sm">
          Based in Yogyakarta, Indonesia.
          <br />I create{" "}
          <Highlighter action="underline" color="#ffffff">
            simple and intuitive
          </Highlighter>{" "}
          things people can click, swipe, and enjoy.
        </p>
      </section>

      <nav aria-label="Social media links">
        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:35s]">
            {SOCIALS.map((item, index) => (
              <SocialChip key={index} item={item} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </nav>

      <section className="py-12" aria-label="Work experience">
        <Timeline experiences={EXPERIENCES} label="Journey" />
      </section>

      <section className="pb-12" aria-label="Selected projects">
        <div className="space-y-6">
          <h2 className="font-semibold text-base">Selected Works</h2>
          <div className="flex flex-col gap-1">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12" aria-label="Open source projects">
        <div className="space-y-6">
          <h2 className="font-semibold text-base">OSS</h2>
          <div className="flex flex-col gap-1">
            {OSS.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>

      <footer className="flex justify-end items-center">
        <span className="text-icon text-xs">
          © {new Date().getFullYear()} Rifqi Maulana. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default page;
