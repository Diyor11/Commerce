import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Img from '@/assets/banner-04.jpg.png'

export const LongCart = () => {
  return (
    <div className='w-full p-4 h-[350px] flex flex-col gap-3 relative'>
      <div className='font-medium text-xs text-[#ea580c]'>Only This Week</div>
      <h4 className='title text-[#111827 text-xl font-bold]'>
        Provides you experienced quality products
      </h4>
      <p className='font-normal text-xs text-[#6b7280]'>Feed your family the best</p>
      <Button color='#fff' className='text-black h-8 leading-8 keep-line gap-1'>
        Shop Now <ArrowRight />
      </Button>
      <img src={Img} alt="product" className='absolute block top-0 left-0 w-full h-auto' width={300} height={350} />
    </div>
  );
};
