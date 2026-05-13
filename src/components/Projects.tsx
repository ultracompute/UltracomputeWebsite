import { cn } from "./ui/utils";
import { Lucide } from "./icons";

const projects = [
  {
    title: "Ultracomputer 1 (UC-1)",
    description: "The world's first quantum ultracomputer",
    icon: Lucide.IconCpu,
    url: null,
  },
  {
    title: "Q-I/O (QIO)",
    description: "A next-generation quantum-native architecture designed for Artificial Ultraintelligence",
    icon: Lucide.IconCpu,
    url: "https://github.com/ultracompute/QIO",
  },
  {
    title: "Ultracompute Website",
    description: "Website repository for our academic society",
    icon: Lucide.IconGlobe,
    url: "https://github.com/ultracompute/UltracomputeWebsite",
  },
  {
    title: "SQAI Website",
    description: "Website repository for the International Summit on Quantum Artificial Intelligence",
    icon: Lucide.IconGlobe,
    url: "https://github.com/QuantumIntelligenceSociety/QuantumIntelligenceSociety.github.io",
  },
];

const cardClass = cn(
  "group",
  "flex items-center justify-between px-4 py-3",
  "bg-neutral-2 hover:bg-neutral-3",
  "outline-none border border-neutral-4 hover:border-neutral-6 rounded-3xl",
  "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-7 focus-visible:ring-offset-neutral-1"
);

export default () => {
  return (
    <div>
      <h2 className="font-medium text-xl mb-3">Projects</h2>
      <ul className="grid grid-cols-1 gap-3 p-1">
        {projects.map((project) => {
          const inner = (
            <>
              <div className="flex flex-row items-stretch gap-5 pl-2">
                <div className="flex items-center justify-center">
                  <project.icon
                    size={24}
                    className="transition duration-300 group-hover:-translate-y-1 text-neutral-10 group-hover:text-neutral-11"
                  />
                </div>
                <div>
                  <h3 className="transition duration-300 group-hover:translate-x-1 text-neutral-12 text-sm">{project.title}</h3>
                  <div className="transition duration-300 group-hover:translate-x-px text-neutral-10 group-hover:text-neutral-11 text-xs">
                    {project.description}
                  </div>
                </div>
              </div>
              {project.url && (
                <Lucide.IconExternalLink
                  size={16}
                  className="shrink-0 transition text-neutral-10 group-hover:text-primary-11"
                />
              )}
            </>
          );

          return (
            <li key={project.title}>
              {project.url ? (
                <a href={project.url} target="_blank" aria-label={project.title} className={cardClass}>
                  {inner}
                </a>
              ) : (
                <div className={cardClass}>{inner}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
