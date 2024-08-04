import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

export const BannerCategories = () => {
  return (
    <div className='mb-5 flex gap-4 h-[42px]'>
      <ul className='grow keep-line gap-4'>
        <li className='text-blue-600 underline'>Home</li>
        <li>Shop</li>
        <li>Fruits & Vegetables</li>
        <li>Beverages</li>
        <li>Blog</li>
        <li>Contatc</li>
      </ul>
      <ul className='keep-line gap-4'>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className='cursor-pointer'>
              <div className='keep-line gap-2'>
                Trending Products <ChevronDown color='gray' />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' className='min-w-10'>
              <DropdownMenuGroup>
                <DropdownMenuItem>Some Content</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild className='cursor-pointer'>
              <div className='keep-line gap-2'>
                Almost Finished{' '}
                <span className='text-white text-sm px-2 py-1 bg-orange-500 rounded keep-line justify-center'>
                  SALE
                </span>
                <ChevronDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' className='min-w-10'>
              <DropdownMenuGroup>
                <DropdownMenuItem>Some Content</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </div>
  );
};
