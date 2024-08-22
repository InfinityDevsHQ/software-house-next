import SubscribeForm from "../forms/subscribe-form";

export default function Subscribe() {
  return (
    <section className="px-4 sm:px-8 md:px-12 flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary">
      <div className="py-8 lg:grid grid-cols-2 items-center justify-between gap-8 w-full">
        <h2 className="text-accent-light text-2xl font-bold mb-6 sm:mb-12 lg:mb-0 text-center sm:text-start xl:max-w-xl">
          Signup our newsletter to get update information, news, insight or
          promotions.
        </h2>
        <SubscribeForm />
      </div>
    </section>
  );
}
