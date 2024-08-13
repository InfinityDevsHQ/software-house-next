import { Button } from "../ui/button";
import Overview from "./overview";

export default function HeroSection() {
  return (
    <>
      <section className="hero-bg flex items-center p-2.5 relative lg:!h-[600px]">
        <div className="md:pl-12 lg:pl-12 py-2 md:py-20 lg:py-24 lg:pt-40 mt-20 md:mt-0">
          <div className="max-w-lg flex flex-col gap-5 lg:w-[581px]">
            <p className="text-white font-medium">Welcome to Infinity Devs</p>
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-white">
              From Strategy to delivery, on time every time.
            </h1>

            <p className="text-base md:text-xl text-white">
              Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
              etiam. Erat mauris posuere dui sed faucibus placerat euismod.
              Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
              imperdiet in scelerisque.
            </p>
            <Button className="rounded-none bg-secondary text-accent-dark hover:text-accent max-w-max px-5 py-2.5">
              Discover More
            </Button>
          </div>
        </div>
        <div className="absolute -bottom-12 left-[50%] translate-x-[-50%] hidden xl:block w-full">
          <Overview />
        </div>
      </section>
    </>
  );
}
