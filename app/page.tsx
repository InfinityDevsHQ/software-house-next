import Subscribe from "@/components/general/subscribe";
import ContactUs from "@/components/homepage/contact-us";
import Convince from "@/components/homepage/convince";
import Services from "@/components/homepage/services";

export default function Home() {
  return (
    <>
      <Convince />
      <Services />
      <ContactUs />
      <Subscribe />
    </>
  );
}
