import Link from "next/link";
import { Button } from "../ui/button";
import {
  ChevronRight,
  Database,
  File,
  FileSearch,
  Folder,
  Globe,
  Scale,
} from "lucide-react";
import SolutionCard, { SolutionCardProps } from "./services/solution-card";

export default function DevelopingSolutions() {
  const Solutions: SolutionCardProps[] = [
    {
      heading: "Business Strategy",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <File />,
    },
    {
      heading: "Financial Planning",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <Database />,
    },
    {
      heading: "Project Management",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <Folder />,
    },
    {
      heading: "Tax Consulting",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <Scale />,
    },
    {
      heading: "Audit & Evaluation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <FileSearch />,
    },
    {
      heading: "Quality Resourcing",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <Globe />,
    },
  ];
  return (
    <section className="px-4 sm:px-16 lg:py-28 lg:px-12">
      <div className="py-12 flex flex-col gap-12">
        <header className="flex flex-col lg:flex-row gap-5 justify-between">
          <div className="flex flex-1 flex-col gap-5 max-w-md w-full mx-auto sm:mx-0">
            <p className="uppercase text-primary-medium font-medium text-center sm:text-start">
              what we offer
            </p>
            <h2 className="text-3xl font-bold text-center sm:text-start">
              Developing Solutions fot the Future
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-2.5 max-w-lg text-center sm:text-start">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
              etiam. Erat mauris posuere dui sed faucibus placerat euismod.
              Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
              imperdiet in scelerisque.
            </p>
            <Button
              className="max-w-max mx-auto sm:mx-0 bg-secondary text-accent-dark hover:text-accent text-xs"
              asChild
            >
              <Link href={"#"} className="flex gap-2.5">
                <span>Get Started</span>
                <ChevronRight height={12} width={12} />
              </Link>
            </Button>
          </div>
        </header>
        <section className="grid lg:grid-cols-3 gap-5">
          {Solutions.map((solution) => (
            <SolutionCard
              key={solution.heading}
              heading={solution.heading}
              description={solution.description}
              icon={solution.icon}
            />
          ))}
        </section>
      </div>
    </section>
  );
}
