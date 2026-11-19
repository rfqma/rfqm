import Image from "next/image";
import Link from "next/link";
import Iconify from "@/components/Iconify";
import { TextAnimate } from "@/components/text-animate-wrapper";
import { EXPERIENCES, OSS, PROJECTS } from "@/constants";
import ProjectCard from "./_components/ProjectCard";
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
              as="span"
              animation="blurInUp"
              duration={0.8}
              by="character"
              once
              className="leading-snug font-semibold"
            >
              Rifqi Maulana
            </TextAnimate>
          </h1>
        </div>
      </header>

      <section className="pb-6">
        <div className="text-foreground-muted">
          Based in Jakarta, Indonesia. Frontend engineer at{" "}
          <Link
            href={"https://techave.dev"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 align-middle group ml-1 mb-1"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="inline-block shrink-0"
            >
              <path
                d="M0 6.93404C0 3.10447 3.10364 0 6.93217 0H23.5721C24.3386 0 24.96 0.621516 24.96 1.3882C24.96 5.21776 21.8563 8.32223 18.0278 8.32223H1.38782C0.621349 8.32223 0 7.70072 0 6.93404Z"
                fill="#225EA8"
              />
              <path
                d="M0.702689 22.9549C0.0389041 22.5716 -0.188525 21.7226 0.194711 21.0586L10.2285 3.67482C12.1428 0.358322 16.3824 -0.777989 19.698 1.13679C20.3618 1.52013 20.5893 2.36914 20.206 3.0331L10.1722 20.4169C8.25794 23.7334 4.01829 24.8697 0.702689 22.9549Z"
                fill="#225EA8"
              />
              <path
                d="M17.1392 8.32223C21.4585 8.32223 24.96 11.8247 24.96 16.1451V21.2889C24.96 22.7226 23.798 23.8848 22.3647 23.8848H21.0496C18.8899 23.8848 17.1392 22.1336 17.1392 19.9734V8.32223Z"
                fill="#225EA8"
              />
              <path
                d="M17.1392 8.32214C21.4585 8.32214 24.96 11.8246 24.96 16.145V21.2888C24.96 22.7225 23.7981 23.8847 22.3648 23.8847H21.0496C18.89 23.8847 17.1392 22.1335 17.1392 19.9733V8.32214Z"
                fill="#41B6C4"
              />
            </svg>
            <span className="font-semibold underline underline-offset-4 decoration-transparent transition-colors duration-300 ease-out group-hover:decoration-current">
              Techave
            </span>
            <span className="-ml-1.5">,</span>
          </Link>{" "}
          slowly drifting into cloud and DevOps. Need something built? reach me on{" "}
          <Link
            href={"https://www.linkedin.com/in/rfqma"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 align-middle group ml-1 mb-1"
          >
            <Iconify icon={"mdi:linkedin"} fontSize={16} />
            <span className="font-semibold underline underline-offset-4 decoration-transparent transition-colors duration-300 ease-out group-hover:decoration-current">
              LinkedIn
            </span>
          </Link>{" "}
          or via{" "}
          <Link
            href={"mailto:hello@rfqm.me"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 align-middle group ml-1 mb-1"
          >
            <Iconify icon={"tabler:mail-filled"} fontSize={16} className="mt-0.5" />
            <span className="font-semibold underline underline-offset-4 decoration-transparent transition-colors duration-300 ease-out group-hover:decoration-current">
              email
            </span>
            <span className="-ml-1.5">.</span>
          </Link>{" "}
          Some of my code lives on{" "}
          <Link
            href={"https://github.com/rfqma"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 align-middle group ml-1 mb-1"
          >
            <Iconify icon={"tabler:brand-github-filled"} fontSize={16} />
            <span className="font-semibold underline underline-offset-4 decoration-transparent transition-colors duration-300 ease-out group-hover:decoration-current">
              GitHub
            </span>
            <span className="-ml-1.5">,</span>
          </Link>{" "}
          and when I'm away from the keyboard, I shoot photos and share them on{" "}
          <Link
            href={"https://www.pexels.com/@rifqi-maulana-286675026/"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 align-middle group ml-1 mb-1"
          >
            <Iconify icon={"simple-icons:pexels"} fontSize={14} />
            <span className="font-semibold underline underline-offset-4 decoration-transparent transition-colors duration-300 ease-out group-hover:decoration-current">
              Pexels
            </span>
            <span className="-ml-1.5">.</span>
          </Link>
        </div>
      </section>

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
        <span className="text-icon text-xs">© {new Date().getFullYear()} Rifqi Maulana.</span>
      </footer>
    </>
  );
};

export default page;
