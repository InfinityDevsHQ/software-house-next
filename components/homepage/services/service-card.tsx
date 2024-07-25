import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
export type ServiceCardProps = {
  heading: string;
  descriptionOne: string;
  descriptionTwo: string;
  image: string;
  serviceLink: string;
  icon: ReactElement;
};
export default function ServiceCard({
  heading,
  descriptionOne,
  descriptionTwo,
  image,
  serviceLink,
  icon,
}: ServiceCardProps) {
  return (
    <article className="shadows bg-accent-light">
      <div className="p-5 flex items-start gap-2.5">
        <span className="h-7 w-7">{icon}</span>
        <div className="flex flex-col gap-2.5">
          <h4 className="font-medium text-accent-dark text-base leading-5">
            {heading}
          </h4>
          <p className="text-xs">{descriptionOne}</p>
        </div>
      </div>
      <div className="flex items-center justify-center shadow-md">
        <Image
          src={image}
          alt="Service Image"
          width={246}
          height={200}
          className="w-full"
        />
      </div>
      <div className="p-5">
        <p className="text-xs">{descriptionTwo}</p>
      </div>
      <Button
        className="w-full bg-secondary px-5 py-2.5 text-xs text-accent-dark hover:text-accent"
        asChild
      >
        <Link href={serviceLink}>Learn More</Link>
      </Button>
    </article>
  );
}
