import SubscribeForm from "../forms/subscribe-form";

export default function Subscribe() {
  return (
    <section className="px-16 flex items-center justify-center bg-gradient-to-r from-primary-dark to-primary">
      <div className="py-12 lg:grid grid-cols-2 items-center justify-between gap-8 w-full">
        <h2 className="text-muted text-2xl font-bold mb-12 lg:mb-0">
          Signup our newsletter to get update information, news, insight or
          promotions.
        </h2>
        <SubscribeForm />
      </div>
    </section>
  );
}
