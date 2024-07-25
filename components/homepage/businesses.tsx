import { Button } from "../ui/button";

export default function Businesses() {
  return (
    <section className="business-bg p-2.5 h-[600px] flex items-center">
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
    </section>
  );
}
