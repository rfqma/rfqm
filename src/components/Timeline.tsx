import dayjs from "dayjs";
import CustomIconify from "./CustomIconify";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Experience } from "@/types";

interface TimelineProps {
  experiences: Experience[];
  label?: string;
}

export function Timeline({ experiences, label = "Timeline" }: TimelineProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold">{label}</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="bg-card-border absolute top-0 bottom-0 left-5 w-px" />

        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="relative flex items-start gap-4">
              {/* Avatar */}
              <div className="relative z-10">
                <Avatar className="size-10">
                  <AvatarFallback className="bg-inner-card-bg border border-inner-card-border">
                    {
                      <CustomIconify
                        icon={
                          experience.endTime
                            ? "mdi:progress-check"
                            : "mdi:progress-clock"
                        }
                        fontSize={16}
                        color=""
                        className={
                          experience.endTime ? "text-[#016630]" : "text-icon"
                        }
                      />
                    }
                  </AvatarFallback>
                </Avatar>
              </div>

              {/* Activity content */}
              <div className="min-w-0 flex-1 flex flex-col">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{experience.site}</span>

                  <div className="bg-inner-card-bg border border-inner-card-border rounded-full ml-auto text-xs text-foreground-muted px-2">
                    {`${dayjs(experience.startTime)
                      .format("MMM 'YY")
                      .toLowerCase()} - ${
                      experience.endTime
                        ? dayjs(experience.endTime)
                            .format("MMM 'YY")
                            .toLowerCase()
                        : "present"
                    }`}
                  </div>
                </div>
                <span className="text-foreground-muted text-xs">
                  {experience.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
