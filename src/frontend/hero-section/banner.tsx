import { Button } from '@/components/ui/button';
import styles from './banner.module.css';
export const Banner = () => {
  return (
    <div className={`${styles.banner} keep-line px-10`}>
      <div className='max-w-[500px]'>
        <button className={styles.discount_btn}>Weekend Discount</button>
        <h2 className='font-bold text-3xl text-[#39245f] my-2'>
          Get the best quality products at the lowest prices
        </h2>
        <p className='text-sm text-black'>
          We have prepared special discounts for you on grocery products. Don't miss these
          opportunities...
        </p>
        <div className="keep-line gap-3 mt-5">
          <Button color='#634c9f'>Shop Now</Button>
          <div>
            <h4 className='text-red-500 text-2xl'>$27.99 <span className='ml-1 text-black text-base'>$56.67</span></h4>
            <h5 className='text-[#03071259] text-xs mt'>Don't miss this limited time offer.</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
