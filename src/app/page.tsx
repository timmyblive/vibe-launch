import HeroSection from "@/components/sections/hero/HeroSection";
import WaitlistSection from "@/components/sections/waitlist/WaitlistSection";
import CommunityFeaturesSection from "@/components/sections/features/CommunityFeaturesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaitlistSection />
      <CommunityFeaturesSection />
    </>
  );
}
