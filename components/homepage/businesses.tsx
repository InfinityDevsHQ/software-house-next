import { Button } from "../ui/button";
import SuccessRate from "./success-rate";

export default function Businesses() {
  return (
    <section className="business-bg p-2.5 h-[600px] relative">
      <div className="flex items-center">
        <div className="p-12">
          <div className="max-w-[561px] flex flex-col gap-5">
            <p className="text-white">Welcome to Infinity Devs</p>
            <h1 className="font-bold text-5xl text-white">
              From Strategy to delivery, on time every time.
            </h1>

            <p className="text-xl text-white">
              Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
              etiam. Erat mauris posuere dui sed faucibus placerat euismod.
              Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
              imperdiet in scelerisque.
            </p>
            <Button className="max-w-max rounded-none bg-secondary text-accent-dark hover:text-accent">
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
