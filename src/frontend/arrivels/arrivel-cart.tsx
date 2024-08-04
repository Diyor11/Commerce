import Img from '@/assets/Link → 1-2-500x500.jpg.png';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ArrivelCart = () => {
  return (
    <div className='w-full border-r border-[#e5e7eb] p-3'>
      <img src={Img} alt='product' width={150} height={150} className='w-full block p-2 mb-4' />
      <h4 className='font-medium text-sm text-[#030712] mb-2'>
        100 Percent Apple Juice – 64 fl oz Bottle
      </h4>
      <div className='rate keep-line gap-2 mb-4'>
        <div className='keep-line gap-1'>
          {Array(100).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
        <span>3</span>
      </div>
      <div className='flex align-bottom cost mb-4'>
        <div className='text-xl text-red-500'>$0.50</div>
        <span className='text-black font-normal text-sm line-through'>$1.99</span>
      </div>
      <Button
        className='flex justify-start h-9 w-full leading-9 text-lg text-[#634c9f] border border-[#634c9f] rounded-[16px]'
        variant={'ghost'}
        color='#634c9f'
      >
        Add Cart
      </Button>
    </div>
  );
};
