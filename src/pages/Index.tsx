import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Games from "@/components/Games";
import Achievements from "@/components/Achievements";
import FAQ from "@/components/FAQ";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="games">
        <Games />
      </div>
      <div id="achievements">
        <Achievements />
      </div>
      <div id="team">
        <Team />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
