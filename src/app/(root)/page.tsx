import AdvantageSection from '@/components/global/advantage';
import HeroSection from '@/components/blog/hero/hero-section';
import WhyChooseUs from '@/components/global/why-choose-us';

export default function Home() {
  return (
    <section>
      <HeroSection />
      <AdvantageSection />
      <WhyChooseUs />
    </section>
  );
}
