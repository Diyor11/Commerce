import CategoriesBox from '../categories-box/CategoriesBox';
import { Banner } from './banner';
import { BannerCategories } from './banner-categories';

export default function HeroSection() {
  return (
    <div className='w-full'>
      <div className='container mx-auto'>
        <div className='flex gap-5'>
          <div className='max-w-72'>
            <CategoriesBox />
          </div>
          <div className='grow'>
            <BannerCategories />
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
}
