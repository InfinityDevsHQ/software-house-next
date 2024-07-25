import Subscribe from "@/components/general/subscribe";
import About from "@/components/homepage/about";
import ContactUs from "@/components/homepage/contact-us";
import Convince from "@/components/homepage/convince";
import DevelopingSolutions from "@/components/homepage/developing-solutions";
import Services from "@/components/homepage/services";

export default function Home() {
  return (
    <>
      <About />
      <DevelopingSolutions />
      <Convince />
      <Services />
      <ContactUs />
      <Subscribe />
    </>
  );
}
