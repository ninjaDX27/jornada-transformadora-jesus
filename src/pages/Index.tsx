
import HeroSection from "@/components/HeroSection";
import WhatIsEbook from "@/components/WhatIsEbook";
import BookStructure from "@/components/BookStructure";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import OfferSection from "@/components/OfferSection";
import CheckoutSection from "@/components/CheckoutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhatIsEbook />
      <BookStructure />
      <BonusSection />
      <TestimonialsSection />
      <OfferSection />
      <CheckoutSection />
      <Footer />
    </div>
  );
};

export default Index;
