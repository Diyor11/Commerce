import DeliveryImg from '@/assets/delivery.png';
import DiscountImg from '@/assets/discounts.png';
import QuolityImg from '@/assets/quolity.png';
import TasksImg from '@/assets/tasks.png';

const services = [
  {
    Img: DeliveryImg,
    title: 'Payment only online',
    desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
  },
  {
    Img: DiscountImg,
    title: 'New stocks and sales',
    desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
  },
  {
    Img: QuolityImg,
    title: 'Quality assurance',
    desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
  },
  {
    Img: TasksImg,
    title: 'Delivery from 1 hour',
    desc: 'Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.',
  },
];

export default function Services() {
  return (
    <section className='w-full'>
      <div className='container mx-auto '>
        <div className='flex justify-between gap-4 border-b border-b-gray-300 py-5'>
          {services.map(({ Img, desc, title }, index) => (
            <div className='flex gap-4 h-20' key={index}>
              <img className='block self-end' src={Img} alt='delivery' width={65} height={22} />
              <div>
                <h3 className='mb-2 font-bold text-base'>{title}</h3>
                <p className='text-xs text-[#6b7280]'>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
