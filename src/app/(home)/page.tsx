import Link from "next/link";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Marquee } from "@/components/magicui/marquee";
import { Highlighter } from "@/components/magicui/highlighter";
import { TextAnimate } from "@/components/magicui/text-animate";
import SocialChip from "./_components/SocialChip";
import { Timeline } from "./_components/Timeline";
import ProjectCard from "./_components/ProjectCard";
import { Paperclip } from "lucide-react";
import { SOCIALS, EXPERIENCES, PROJECTS } from "@/constants";

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
          things people can click, swipe, and enjoy. With expertise in frontend
          development, I build responsive web applications that deliver
          exceptional user experiences.
        </p>
      </section>

      <nav aria-label="Social media links">
        <div className="relative flex w-full items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:35s]">
            {SOCIALS.map((item, index) => (
              <SocialChip key={index} item={item} />
            ))}
          </Marquee>
          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r"></div>
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
        </div>
      </nav>

      <section className="py-12" aria-label="Work experience">
        <Timeline experiences={EXPERIENCES} label="Experience" />
      </section>

      <section className="pb-12" aria-label="Selected projects">
        <div className="space-y-6">
          <h2 className="font-semibold text-base">Selected Work</h2>
          <div className="flex flex-col gap-1">
            {PROJECTS.map((project, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <ProjectCard project={project} />
                </TooltipTrigger>
                <TooltipContent>{project.description}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </section>

      <footer className="flex justify-between items-center">
        <Link
          href={"https://www.cake.me/resumes/rfqma"}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-icon text-xs gap-2 cursor-none"
        >
          <Paperclip className="size-3" />
          Resume
        </Link>
        <span className="text-icon text-xs">
          © {new Date().getFullYear()} Rifqi Maulana. All rights reserved.
        </span>
      </footer>
    </>
  );
};

export default page;
