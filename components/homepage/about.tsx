import Image from "next/image";
import Rating from "./about/rating";

export default function About() {
  return (
    <section className="px-16 py-24">
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        <div className="py-16 flex flex-col gap-5 flex-1 order-2 lg:order-1">
          <header className="flex gap-5 justify-between">
            <div className="flex flex-1 flex-col gap-5 w-full">
              <p className="uppercase text-primary-medium font-medium">
                what we offer
              </p>
              <h2 className="text-3xl font-bold">
                Developing Solutions fot the Future
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
                etiam. Erat mauris posuere dui sed faucibus placerat euismod.
                Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh
                faucibus imperdiet in scelerisque.
              </p>
            </div>
          </header>
          <Rating />
        </div>
        <div className="flex items-center justify-center order-1 lg:order-2">
          <Image
            src={"/assets/convince.png"}
            width={483}
            height={500}
            alt="Image"
            className="h-full"
          />
        </div>
      </div>
    </section>
  );
}
