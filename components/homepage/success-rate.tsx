export default function SuccessRate() {
  return (
    <div className="p-7 flex flex-col md:flex-row lg:flex-row gap-3 sm:gap-7 bg-accent-light overview-shadow max-w-screen-xl mx-auto">
      <div className="!w-[300px] self-center">
        <h3 className="text-2xl font-bold text-accent-dark flex-1 self-center text-center md:text-start w-full">
          We are ready to serve you differently
        </h3>
      </div>
      <span className="border-2 border-muted" />
      <p className="self-center mx-auto text-center md:text-start flex-1">
        Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas etiam.
        Erat mauris posuere dui sed faucibus placerat euismod. Blandit facilisis
        hac leo morbi. Nibh erat hac nibh nibh faucibus imperdiet in
        scelerisque.
      </p>
      <span className="border-2 border-muted" />
      <div className="flex flex-col gap-2.5 px-10 py-3 sm:py-5 items-center justify-center self-center">
        <p className="text-primary-medium text-4xl font-bold">+72%</p>
        <p className="font-bold text-accent-dark">Success Rate</p>
      </div>
    </div>
  );
}
