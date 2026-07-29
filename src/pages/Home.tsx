import { Highlighter } from "@/components/highlighter";
import { Marquee } from "@/components/marquee";
import { TextAnimate } from "@/components/text-animate";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { EXPERIENCES, PROJECTS, SOCIALS } from "@/constants";
import { Paperclip } from "lucide-react";
import ProjectCard from "./components/ProjectCard";
import SocialChip from "./components/SocialChip";
import { Timeline } from "./components/Timeline";

export function Home() {
  return (
    <>
      <div className="py-6 flex items-center gap-4">
        <div className="relative size-11 outline select-none rounded-full outline-card-border overflow-hidden">
          <img
            src={"/logo.png"}
            alt="Rifqi Maulana"
            width={100}
            height={100}
            className="size-full"
          />
        </div>
        <div className="flex flex-col">
          <TextAnimate
            animation="blurInUp"
            duration={0.8}
            by="character"
            once
            className="leading-snug font-semibold"
          >
            Rifqi Maulana
          </TextAnimate>
          <span className="leading-snug font-semibold text-foreground-muted whitespace-nowrap text-sm">
            Frontend Developer at{" "}
            <a
              href={"https://techave.dev"}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 transition-colors duration-300 ease-out hover:text-foreground"
            >
              Techave
            </a>
          </span>
        </div>
      </div>

      <div className="pb-6">
        <p className="text-foreground-muted leading-relaxed text-sm">
          Based in Yogyakarta, Indonesia.
          <br />I create{" "}
          <Highlighter action="underline" color="#ffffff">
            simple and intuitive
          </Highlighter>{" "}
          things people can click, swipe, and enjoy.
        </p>
      </div>

      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:35s]">
          {SOCIALS.map((item, index) => (
            <SocialChip key={index} item={item} />
          ))}
        </Marquee>
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
      </div>

      <div className="py-12">
        <Timeline experiences={EXPERIENCES} label="Experience" />
      </div>

      <div className="pb-12">
        <div className="space-y-6">
          <h2 className="font-semibold">Selected Work</h2>
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
      </div>

      <div className="flex justify-between items-center">
        <a
          href={"https://www.cake.me/resumes/rfqma"}
          className="flex items-center text-icon text-xs gap-2 cursor-none"
        >
          <Paperclip className="size-3" />
          Resume
        </a>
        <span className="text-icon text-xs">
          © {new Date().getFullYear()} Rifqi Maulana
        </span>
      </div>
    </>
  );
}
