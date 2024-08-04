import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';
import styles from './styles.module.css';

export const ShortCard = ({ title, subtitle, Img }: any) => {
  return (
    <div
      style={{ backgroundImage: `url(${Img})` }}
      className={`${styles.short_card} w-full rounded-md overflow-hidden py-8 px-5`}
    >
      <div className='flex flex-col gap-2 max-w-[190px] mb-5'>  
        <h4 className='text-[#ea580c] text-xs'>Only This Week</h4>
        <h3 className='text-black text-xl font-bold'>{title}</h3>
        <p className='text-xs text-[#6b7280]'>{subtitle}</p>
      </div>
      <Button color='#fff' className={styles.btn}>
        Buy now <MoveRight className={'ml-2 ' + styles.arrow_right} />
      </Button>
    </div>
  );
};
