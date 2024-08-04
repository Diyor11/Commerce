import PlayMarket from '@/assets/playmarkey.png';
import AppStore from '@/assets/appstore.png';
import { Button } from '@/components/ui/button';
import { Mail, Phone } from 'lucide-react';
import styles from './footer.module.css';

import Facebook from '@/assets/facebook.png';
import Twitter from '@/assets/twitter.png';
import Instagram from '@/assets/instagram.png';
import Linkedin from '@/assets/linkedin.png';

import Visa from '@/assets/visa.png';
import Master from '@/assets/master.png';
import Paypal from '@/assets/paypal.png';
import Skrill from '@/assets/skrill.png';
import Klarna from '@/assets/klarna.png';

const footerLinks = [
  {
    title: 'Make Money with Us',
    items: [
      { text: 'Sell on Grogin' },
      { text: 'Sell Your Services on Grogin' },
      { text: 'Sell on Grogin Business' },
      { text: 'Sell Your Apps on Grogin' },
      { text: 'Become an Affilate' },
      { text: 'Advertise Your Products' },
      { text: 'Sell-Publish with Us' },
      { text: 'Become an Blowwe Vendor' },
    ],
  },
  {
    title: 'Make Money with Us',
    items: [
      { text: 'Sell on Grogin' },
      { text: 'Sell Your Services on Grogin' },
      { text: 'Sell on Grogin Business' },
      { text: 'Sell Your Apps on Grogin' },
      { text: 'Become an Affilate' },
      { text: 'Advertise Your Products' },
      { text: 'Sell-Publish with Us' },
      { text: 'Become an Blowwe Vendor' },
    ],
  },
  {
    title: 'Make Money with Us',
    items: [
      { text: 'Sell on Grogin' },
      { text: 'Sell Your Services on Grogin' },
      { text: 'Sell on Grogin Business' },
      { text: 'Sell Your Apps on Grogin' },
      { text: 'Become an Affilate' },
      { text: 'Advertise Your Products' },
      { text: 'Sell-Publish with Us' },
      { text: 'Become an Blowwe Vendor' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className='w-full bg-[#F3F4F0] py-10'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-5'>
          <div className='keep-line justify-between'>
            <div>
              <h3 className='text-lg text-[#111827] mb-2'>Join our newsletter for £10 offs</h3>
              <p className=' text-xs text-[#6B7280]'>
                Register now to get latest updates on promotions & coupons.Don’t worry, we not spam!
              </p>
            </div>
            <div>
              <form
                action=''
                className='mb-2 w-[400px] rounded-md overflow-hidden bg-white relative flex items-stretch'
              >
                <Mail
                  color='#9CA3AF'
                  width={18}
                  height={14}
                  className='absolute top-1/2 left-2 translate-y-[-50%]'
                />
                <input type='text' className='h-auto grow pl-8' />
                <Button className='rounded-none' color='#634C9F'>
                  Send
                </Button>
              </form>
              <p className='terms text-xs'>
                By subscribing you agree to our{' '}
                <span className='text-blue-600'>
                  Terms & Conditions and Privacy & Cookies Policy.
                </span>
              </p>
            </div>
          </div>
          <FooterMain />
          <FooterBottom />
        </div>
      </div>
    </footer>
  );
}

function FooterMain() {
  return (
    <div className='w-full py-5 border-t border-t-[#D1D5DB]'>
      <div className='flex gap-4 justify-between'>
        <div>
          <h4 className={styles.footer_title}>Do You Need Help ?</h4>
          <ul className='flex flex-col gap-5'>
            <li>
              <p className='text-[#6B7280] text-xs'>
                Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska.
              </p>
            </li>
            <li className='keep-line gap-3'>
              <Phone />
              <div>
                <p className='text-[#6B7280] mb-1 text-xs'>Monday-Friday: 08am-9pm</p>
                <h4 className='text-[#111827] text-lg font-extrabold'>0 800 300-353</h4>
              </div>
            </li>
            <li className='keep-line gap-3'>
              <Mail />
              <div>
                <p className='text-[#6B7280] mb-1 text-xs'>Monday-Friday: 08am-9pm</p>
                <h4 className='text-[#111827] text-lg font-extrabold'>0 800 300-353</h4>
              </div>
            </li>
          </ul>
        </div>
        {footerLinks.map(({ items, title }, index) => (
          <div key={index}>
            <h4 className={styles.footer_title}>{title}</h4>
            <ul className='flex flex-col gap-2'>
              {items.map(({ text }, i) => (
                <li key={i} className='text-sm text-[#D1D5DB]'>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h4 className={styles.footer_title}>Download our app</h4>
          <div className='keep-line gap-3 mb-3'>
            <img src={PlayMarket} alt='playmarket' width={120} height={40} />
            <span className='text-[#6B7280] text-xs'>Download App Get -10% Discount</span>
          </div>
          <div className='keep-line gap-3 mb-8'>
            <img src={AppStore} alt='playmarket' width={120} height={40} />
            <span className='text-[#6B7280] text-[10px]'>Download App Get -10% Discount</span>
          </div>
          <div className='socials '>
            <h5 className='text-[#111827] text-xs mb-2'>Follow us on social media:</h5>
            <ul className='keep-line gap-1'>
              <li className='cursor-pointer w-8 h-8 bg-white rounded-lg keep-line justify-center'>
                <img src={Facebook} alt='social' width={8} height={15} />
              </li>
              <li className='cursor-pointer w-8 h-8 bg-white rounded-lg keep-line justify-center'>
                <img src={Twitter} alt='social' width={15} height={12} />
              </li>
              <li className='cursor-pointer w-8 h-8 bg-white rounded-lg keep-line justify-center'>
                <img src={Instagram} alt='social' width={14} height={14} />
              </li>
              <li className='cursor-pointer w-8 h-8 bg-white rounded-lg keep-line justify-center'>
                <img src={Linkedin} alt='social' width={13} height={13} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterBottom() {
  return (
    <div className='w-full py-5 border-t border-t-[#D1D5DB]'>
      <div className='flex justify-between'>
        <div>
          <p className='text-[#6B7280] text-xs mb-6'>
            Copyright 2024 © Grogin WooCommerce WordPress Theme. All right reserved. Powered by
            KLBTheme.
          </p>
          <ul className='keep-line gap-2'>
            <li>
              <img src={Visa} alt='' width={36} height={13} />
            </li>
            <li>
              <img src={Master} alt='' width={24} height={15} />
            </li>
            <li>
              <img src={Paypal} alt='' width={53} height={15} />
            </li>
            <li>
              <img src={Skrill} alt='' width={41} height={15} />
            </li>
            <li>
              <img src={Klarna} alt='' width={62} height={14} />
            </li>
          </ul>
        </div>
        <ul className='keep-line gap-1'>
          <li className='text-[#111827] text-xs'>Terms and Conditions</li>
          <li className='text-[#111827] text-xs'>Privacy Policy</li>
          <li className='text-[#111827] text-xs'>Order Tracking</li>
        </ul>
      </div>
    </div>
  );
}
