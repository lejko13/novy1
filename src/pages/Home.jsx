import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TickerSection from '../components/sections/TickerSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import BranchesSection from '../components/sections/BranchesSection';
import GymsCardsSection from '../components/sections/GymsCardsSection';
import PricingSection from '../components/sections/PricingSection';
import TrainersSection from '../components/sections/TrainersSection';
import FAQSection from '../components/sections/FAQSection';
import ContactSection from '../components/sections/ContactSection';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <div style={{ background: 'var(--obsidian)', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <TickerSection />
      <HowItWorksSection />
      <WhyUsSection />
<<<<<<< HEAD
      {/* <BranchesSection /> */}
=======
      <BranchesSection />
>>>>>>> d929236306f2b4bc40d0b7713dc45852b5980402
      <GymsCardsSection />
      <PricingSection />
      <TrainersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}