import {
  Arrivels,
  DiscountProducts,
  FeatureProducts,
  HeroSection,
  MainWrap,
  OnlyWeekProducts,
  RecBanner,
  Services,
} from '@/frontend';

export default function Home() {
  return (
    <>
      <MainWrap>
        <div className='w-full flex flex-col gap-8'>
          <HeroSection />
          <Services />
          <DiscountProducts />
          <Arrivels />
          <OnlyWeekProducts />
          <FeatureProducts />
          <RecBanner />
        </div>
      </MainWrap>
    </>
  );
}
