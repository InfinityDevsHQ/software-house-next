import Image from "next/image";
import ListSvg from "../svgs/list-svg";
import ArrowPointedSvg from "../svgs/arrow-pointed-svg";

export default function Convince() {
  return (
    <section className="px-4 md:px-12 py-12 md:py-16 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-2.5 max-w-[1180px]">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/convince.png"}
            alt="Convince Image"
            width={500}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="contact-hero text-accent p-8 sm:p-12 flex flex-col gap-5">
          <h4 className="text-3xl font-bold">
            From Strategy to delivery, on time every time.
          </h4>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
            etiam. Erat mauris posuere dui sed faucibus placerat euismod.
            Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
            imperdiet in scelerisque.
          </p>
          <ol className="max-w-96 p-5 flex flex-col gap-5">
            <li className="flex gap-2.5 text-accent-light">
              <span>
                <ListSvg />
              </span>
              <div className="flex flex-col gap-2.5">
                <h4 className="text-base font-medium">Business Strategy</h4>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Nibh lectus diam
                  egestas etiam. Erat mauris posuere dui sed faucibus placerat
                  euismod.
                </p>
              </div>
            </li>
            <li className="flex gap-2.5 text-accent-light">
              <span>
                <ArrowPointedSvg />
              </span>
              <div className="flex flex-col gap-2.5">
                <h4 className="text-base font-medium">Business Strategy</h4>
                <p className="text-xs">
                  Lorem ipsum dolor sit amet consectetur. Nibh lectus diam
                  egestas etiam. Erat mauris posuere dui sed faucibus placerat
                  euismod.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
