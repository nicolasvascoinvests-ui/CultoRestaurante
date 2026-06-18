import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import QuoteBand from "@/components/QuoteBand";
import Visitanos from "@/components/Visitanos";
import Footer from "@/components/Footer";
import WhatsappFab from "@/components/WhatsappFab";

export default function Home() {
  return (
    <>
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-tinta focus:px-5 focus:py-2.5 focus:text-lino"
      >
        Saltar al menú
      </a>
      <Nav />
      <main>
        <Hero />
        <MenuSection />
        <About />
        <Gallery />
        <QuoteBand />
        <Visitanos />
      </main>
      <Footer />
      <WhatsappFab />
    </>
  );
}
