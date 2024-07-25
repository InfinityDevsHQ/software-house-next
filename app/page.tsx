import Subscribe from "@/components/general/subscribe";
import ContactUs from "@/components/homepage/contact-us";
import Convince from "@/components/homepage/convince";
import DevelopingSolutions from "@/components/homepage/developing-solutions";
import Services from "@/components/homepage/services";

export default function Home() {
  return (
    <>
      <DevelopingSolutions />
      <Convince />
      <Services />
      <ContactUs />
      <Subscribe />
    </>
  );
}
