import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {Footer, Header} from '../';

export default function MainWrap({ children }: { children: ReactNode }) {
  return (
    <div className='w-full'>
      <TopHeader />
      <SecondHeader />
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function TopHeader() {
  return (
    <div className='w-full px-3 bg-primary'>
      <div className='max-w-[1000px] mx-auto keep-line justify-between'>
        <h3 className='font-semibold text-white text-sm'>
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order in.
        </h3>
        <div className='text-white'>
          Until the end of the sale: <span className='text-lg font-bold'>47</span> days{' '}
          <span className='text-lg font-bold'>06</span> hours{' '}
          <span className='text-lg font-bold'>55</span> minutes
        </div>
      </div>
    </div>
  );
}

function SecondHeader() {
  return (
    <div className='w-full border-b border-gray-400 py-1'>
      <div className='container mx-auto'>
        <div className='keep-line justify-between'>
          <ul className='keep-line gap-3'>
            <li className='text-secondary text-xs'>
              <Link to='#'>My Account</Link>
            </li>
            <li className='text-secondary text-xs'>
              <Link to='#'>My Account</Link>
            </li>
            <li className='text-secondary text-xs'>
              <Link to='#'>My Account</Link>
            </li>
            <li className='text-secondary text-xs'>|</li>
            <li className='text-secondary text-xs'>
              We deliver to you every day from{' '}
              <span className='text-orange-400 font-bold'>7:00 to 23:00</span>
            </li>
          </ul>
          <div className='keep-line gap-3'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='cursor-pointer'>
                <div className='keep-line'>
                  English <ChevronDown color='gray' />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent side='bottom' className='min-w-10'>
                <DropdownMenuGroup>
                  <DropdownMenuItem>UZ</DropdownMenuItem>
                  <DropdownMenuItem>RU</DropdownMenuItem>
                  <DropdownMenuItem>EN</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className='cursor-pointer'>
                <div className='keep-line'>
                  Order <ChevronDown color='gray' />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent side='bottom' className=''>
                <DropdownMenuGroup>
                  <DropdownMenuItem>Shipping</DropdownMenuItem>
                  <DropdownMenuItem>Delivery</DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className='flex text-secondary'>Order Tracking</div>
          </div>
        </div>
      </div>
    </div>
  );
}
