import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { TrustLogos } from "../components/sections/TrustLogos";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { CaseStudies } from "../components/sections/CaseStudies";
import { Industries } from "../components/sections/Industries";
import { Process } from "../components/sections/Process";
import { Stats } from "../components/sections/Stats";
import { Team } from "../components/sections/Team";
import { Testimonials } from "../components/sections/Testimonials";
import { FAQ } from "../components/sections/FAQ";
import { CTA } from "../components/sections/CTA";
import { EnquiryPopup } from "../components/ui/EnquiryPopup";
import { FloatingContact } from "../components/ui/FloatingContact";

export default function Home() {
  return (
    <>
      <Navbar />
      <EnquiryPopup />
      <FloatingContact />
      <main className="flex-1 bg-[#010103]">
        <Hero />
        <TrustLogos />
        <About />
        <Services />
        <CaseStudies />
        <Industries />
        <Process />
        <Stats />
        <Team />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
