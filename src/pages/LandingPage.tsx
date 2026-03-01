import HeroSection from "../components/landing/HeroSection";
import ValueProps from "../components/landing/ValueProps";
import HowItWorks from "../components/landing/HowItWorks";
import FounderStory from "../components/landing/FounderStory";
import WaitlistForm from "../components/landing/WaitlistForm";
import Footer from "../components/landing/Footer";

function LandingPage() {
  return (
    <div className="overflow-x-hidden font-sans text-slate-900 dark:text-slate-100">
      <HeroSection />
      <ValueProps />
      <HowItWorks />
      <FounderStory />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default LandingPage;
