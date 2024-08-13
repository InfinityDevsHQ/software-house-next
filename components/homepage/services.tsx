import { Briefcase } from "lucide-react";
import BuildingSvg from "../svgs/building-svg";
import DiamondSvg from "../svgs/diamond-svg";
import ServiceCard, { ServiceCardProps } from "./services/service-card";
export default function Services() {
  const Services: ServiceCardProps[] = [
    {
      heading: "National Top 5 Consulting",
      descriptionOne:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      descriptionTwo:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <BuildingSvg />,
      image: "/assets/services/service-1.png",
      serviceLink: "#",
    },
    {
      heading: "99.9% Client Satisfaction",
      descriptionOne:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      descriptionTwo:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <DiamondSvg />,
      image: "/assets/services/service-2.png",
      serviceLink: "#",
    },
    {
      heading: "Iver 2,000+ Business Cases",
      descriptionOne:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      descriptionTwo:
        "Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam. Erat mauris posuere dui sed faucibus placerat euismod. ",
      icon: <Briefcase />,
      image: "/assets/services/service-3.png",
      serviceLink: "#",
    },
  ];
  return (
    <section className="px-4 py-8 flex flex-col gap-4 sm:gap-8 md:gap-12">
      <div className="flex flex-col gap-5 max-w-md text-center mx-auto">
        <p className="uppercase text-primary-medium font-medium">
          what we offer
        </p>
        <h2 className="text-3xl font-bold">
          Developing Solutions for the Future
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 place-items-center place-content-center  gap-4 md:px-24">
        {Services.map((service) => (
          <ServiceCard
            key={service.heading}
            heading={service.heading}
            descriptionOne={service.descriptionOne}
            descriptionTwo={service.descriptionTwo}
            serviceLink={service.serviceLink}
            image={service.image}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}
