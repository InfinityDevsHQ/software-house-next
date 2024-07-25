import Link from "next/link";
import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";

export default function DevelopingSolutions() {
  return (
    <section className="px-16">
      <div className="py-12">
        <header className="flex gap-5 justify-between">
          <div className="flex flex-1 flex-col gap-5 max-w-md w-full">
            <p className="uppercase text-primary-medium font-medium">
              what we offer
            </p>
            <h2 className="text-3xl font-bold">
              Developing Solutions fot the Future
            </h2>
          </div>
          <div className="flex flex-col justify-between gap-2.5 max-w-lg">
            <p>
              Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
              etiam. Erat mauris posuere dui sed faucibus placerat euismod.
              Blandit facilisis hac leo morbi. Nibh erat hac nibh nibh faucibus
              imperdiet in scelerisque.
            </p>
            <Button
              className="max-w-max bg-secondary text-accent-dark hover:text-accent text-xs"
              asChild
            >
              <Link href={"#"} className="flex gap-2.5">
                <span>Get Started</span>
                <ChevronRight height={12} width={12} />
              </Link>
            </Button>
          </div>
        </header>
      </div>
    </section>
  );
}
