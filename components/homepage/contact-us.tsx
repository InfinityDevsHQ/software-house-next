import Image from "next/image";
import { Button } from "../ui/button";
import { MessageCircle } from "lucide-react";
import ContactForm from "../forms/contact-form";

export default function ContactUs() {
  return (
    <section className="px-4 py-12 md:p-8 md:px-12 md:py-24 flex items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-1 sm:gap-2.5">
        <div className={`w-full lg:w-100 contact-hero text-accent`}>
          <div className="w-full p-8 md:p-12 h-full z-50 flex flex-col justify-between">
            <div className="flex flex-col gap-2.5">
              <span className="uppercase font-medium">get in touch</span>
              <h3 className="text-3xl font-bold">Contact Our Sales</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nibh lectus diam egestas
                etiam. Erat mauris posuere dui sed faucibus placerat euismod.
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="font-medium">Sales@domain.com</p>
              <p className="font-medium">+92 123 1234 123</p>
              <Button className="bg-secondary text-accent-foreground gap-2.5 hover:text-accent max-w-max rounded-none">
                <MessageCircle height={12} width={12} />
                <span>Chat Sales</span>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
