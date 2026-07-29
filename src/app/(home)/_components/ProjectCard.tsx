import Link from "next/link";
import CustomIconify from "@/components/CustomIconify";
import { Project } from "@/types";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={project.href} target="_blank" className="cursor-none">
      <div className="flex justify-between p-2 items-center cursor-none hover:bg-inner-card-bg rounded-md transition-all duration-300 group hover:scale-101">
        <div className="flex flex-col gap-1">
          <span className="font-medium text-sm">{project.title}</span>
          <span className="text-xs text-foreground-muted">{project.year}</span>
        </div>
        <div className="p-2 rounded-full flex items-center bg-inner-card-bg border border-inner-card-border h-fit">
          <CustomIconify
            icon={"pajamas:work-item-keyresult"}
            fontSize={14}
            className="text-icon group-hover:text-foreground transition-colors duration-500"
            color=""
          />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
