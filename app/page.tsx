import Subscribe from "@/components/general/subscribe";
import About from "@/components/homepage/about";
import Businesses from "@/components/homepage/businesses";
import ContactUs from "@/components/homepage/contact-us";
import Convince from "@/components/homepage/convince";
import DevelopingSolutions from "@/components/homepage/developing-solutions";
import HeroSection from "@/components/homepage/hero-section";
import Overview from "@/components/homepage/overview";
import Services from "@/components/homepage/services";
import SuccessRate from "@/components/homepage/success-rate";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="xl:hidden md:p-12">
        <Overview />
      </div>
      <About />
      <Businesses />
      <section className="px-4 py-8 sm:p-12 w-full lg:hidden">
        <SuccessRate />
      </section>
      <DevelopingSolutions />
      <Convince />
      <Services />
      <ContactUs />
      <Subscribe />
    </>
  );
}
