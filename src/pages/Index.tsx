
import HeroSection from "@/components/HeroSection";
import AboutJourney from "@/components/AboutJourney";
import WhyParticipate from "@/components/WhyParticipate";
import ForWho from "@/components/ForWho";
import WhatYouGet from "@/components/WhatYouGet";
import SignupForm from "@/components/SignupForm";
import WhenStarts from "@/components/WhenStarts";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutJourney />
      <WhyParticipate />
      <ForWho />
      <WhatYouGet />
      <SignupForm />
      <WhenStarts />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
