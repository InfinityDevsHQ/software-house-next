import Image from "next/image";

export default function Convince() {
  return (
    <section className="px-12 py-24 flex items-center justify-center">
      <div className="grid lg:grid-cols-2 gap-2.5 max-w-[1180px]">
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/convince.png"}
            alt="Convince Image"
            width={575}
            height={500}
          />
        </div>
        <div className="contact-hero text-accent p-12 flex flex-col gap-5">
          <h4 className="text-3xl font-bold">
            From Strategy to delivery, on time every time.
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
            etiam. Erat mauris posuere dui sed faucibus placerat euismod.
            Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
            imperdiet in scelerisque.
          </p>
        </div>
      </div>
    </section>
  );
}
