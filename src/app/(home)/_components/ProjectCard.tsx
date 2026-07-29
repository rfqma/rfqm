import Link from "next/link";
import CustomIconify from "@/components/CustomIconify";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={project.href} target="_blank" rel="noopener noreferrer" className="cursor-none">
      <article className="flex justify-between p-3 items-center cursor-none hover:bg-inner-card-bg rounded-md transition-all duration-300 group hover:scale-[1.01]">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm">{project.title}</span>
          <span className="text-xs text-foreground-muted line-clamp-2">
            {project.description}
          </span>
          <span className="text-xs text-foreground-muted">{project.year}</span>
        </div>
        <div className="p-2 rounded-full flex items-center bg-inner-card-bg border border-inner-card-border h-fit shrink-0 ml-3">
          <CustomIconify
            icon={"pajamas:work-item-keyresult"}
            fontSize={14}
            className="text-icon group-hover:text-foreground transition-colors duration-500"
            color=""
          />
        </div>
      </article>
    </Link>
  );
};

export default ProjectCard;
