import FiveStars from "./five-stars";

export default function Rating() {
  return (
    <div className="border-t-2 border-muted flex justify-between gap-5">
      <div className="py-5 mx-auto flex flex-col gap-2.5  items-center justify-center text-center">
        <p className="text-4xl font-bold text-primary-medium">4.7+</p>
        <FiveStars />
        <p className="font-bold text-accent-dark">Review Customer</p>
        <p className="text-accent-foreground text-xs">
          Erat mauris posuere dui sed faucibus
        </p>
      </div>
      <span className="border-2 border-muted" />
      <div className="py-5 mx-auto flex flex-col gap-2.5  items-center justify-center text-center">
        <p className="text-4xl font-bold text-primary-medium">B+</p>
        <FiveStars />
        <p className="font-bold text-accent-dark">Business Class</p>
        <p className="text-accent-foreground text-xs">
          Erat mauris posuere dui sed faucibus
        </p>
      </div>
    </div>
  );
}
