import { ReactElement } from "react";

export type SolutionCardProps = {
  heading: string;
  description: string;
  icon: ReactElement;
};
export default function SolutionCard({
  heading,
  icon,
  description,
}: SolutionCardProps) {
  return (
    <article className="p-5 shadows flex items-start gap-2.5 h-[120px]">
      <span className="h-7 w-7">{icon}</span>
      <div className="flex flex-col gap-2.5">
        <h4 className="font-medium text-accent-dark text-base leading-5">
          {heading}
        </h4>
        <p className="text-xs">{description}</p>
      </div>
    </article>
  );
}
