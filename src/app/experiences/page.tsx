import { EXPERIENCES } from "@/constants/experience.constant";

export default function Experiences() {
  return (
    <section className="flex min-h-screen md:items-center md:justify-center mt-10 md:mt-0 w-full">
      <div className="flex flex-col items-start justify-start max-w-xl gap-2">
        <h2 className=" rounded-lg text-sm font-medium">
          QUICK SUMMARY OF MY MOST RECENT EXPERIENCES
        </h2>
        <ul className="timeline timeline-vertical">
          {EXPERIENCES.map((item, index) => {
            return (
              <li key={index}>
                {index !== 0 && <hr className="bg-[#ededed]" />}
                <div className="timeline-middle">
                  {index !== EXPERIENCES.length - 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-12a.75.75 0 00-1.5 0v4.25c0 .414.336.75.75.75h3a.75.75 0 000-1.5H10.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
                <div className="timeline-end timeline-box flex flex-col">
                  <span className="text-xs">{item.time}</span>
                  <span className="text-sm font-semibold">{item.site}</span>
                  <span className="textxs">{item.role}</span>
                </div>
                {index !== EXPERIENCES.length - 1 && (
                  <hr className="bg-[#ededed]" />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
