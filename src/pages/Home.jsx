import Navbar from '../components/navbar/Navbar';
import HeroSection from '../components/sections/HeroSection';
import TickerSection from '../components/sections/TickerSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import WhyUsSection from '../components/sections/WhyUsSection';
import BranchesSection from '../components/sections/BranchesSection';
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
      <BranchesSection />
      <PricingSection />
      <TrainersSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}