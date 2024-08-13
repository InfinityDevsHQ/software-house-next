import { Button } from "../ui/button";
import SuccessRate from "./success-rate";

export default function Businesses() {
  return (
    <section className="business-bg h-[600px] relative">
      <div className="flex items-center">
        <div className="px-4 py-20 md:p-20 lg:p-12 ">
          <div className="max-w-xl flex flex-col gap-5 pt-16 sm:pt-20 md:pt-10 lg:pt-0">
            <p className="text-white">Welcome to Infinity Devs</p>
            <h1 className="font-bold text-4xl md:text-5xl text-white">
              Connecting businesses ideas, and people for greater impact
            </h1>

            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
              etiam. Erat mauris posuere dui sed faucibus placerat euismod.
              Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
              imperdiet in scelerisque.
            </p>
            <Button className="max-w-max rounded-none bg-secondary text-accent-dark hover:text-accent px-5 py-2.5">
              Discover More
            </Button>
          </div>
        </div>
      </div>
      <section className="px-12 absolute w-full -bottom-24  hidden lg:block">
        <SuccessRate />
      </section>
    </section>
  );
}
