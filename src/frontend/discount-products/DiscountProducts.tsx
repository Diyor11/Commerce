import NewsImg from '@/assets/news.png';
import { ShortCard } from './short-card';
import { LongCart } from './long-cart';

const disProducts = [
  { title: 'Quality eggs at an affordable price', subtitle: 'Eat one every day', Img: NewsImg },
  { title: 'Quality eggs at an affordable price', subtitle: 'Eat one every day', Img: NewsImg },
  { title: 'Quality eggs at an affordable price', subtitle: 'Eat one every day', Img: NewsImg },
];
export function DiscountProducts() {
  return (
    <div className='container mx-auto'>
      <div className='flex gap-4'>
        {disProducts.map((item, index) => (
          <ShortCard {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export function OnlyWeekProducts() {
  return(
  <div className="w-full">
    <div className="container mx-auto">
      <div className="flex items-stretch gap-6">
        <LongCart />
        <LongCart />
        <LongCart />
        <LongCart />
        <LongCart />
      </div>
    </div>
  </div>
  );
}
