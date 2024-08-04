import { Button } from '@/components/ui/button';
import { Apple, Beef, Boxes, ChevronDown, ChevronUp } from 'lucide-react';
import { ReactNode, useState } from 'react';

const categories = [
  {icon: Apple, toggleText: 'Fruits & Vegetables'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
  {icon: Beef, toggleText: 'Meats & Seafood'},
]

export default function CategoriesBox() {
  return(
    <div className="w-full border border-[#E5E7EB] rounded-md">
      <div className='px-4 leading-9 keep-line'><Boxes className='mr-3' /> All Categories</div>
      {categories.map(({icon: Icon, toggleText}) => (
      <Collapse 
        className=''
        renderToggle={(open, toggle) => (
          <Button variant={'ghost'} className='w-full flex justify-between hover:bg-transparent' onClick={toggle}>
            <span className='keep-line'><Icon className='mr-3'/>{toggleText}</span>
            {open ? <ChevronUp color='#E5E7EB' />:<ChevronDown color='#E5E7EB' />}
          </Button>
        )}
        items={[
          {text: 'Item 1'},
          {text: 'Item 2'},
          {text: 'Item 3'},
        ]}
      />
      ))}
    </div>
  );
}

interface IICollapseItem {
  text: string;
}
interface ICollapse {
  renderToggle: (isOpen: boolean, toggle: () => void) => ReactNode;
  items: IICollapseItem[];
  className: string;
}

function Collapse({ renderToggle, items, className }: ICollapse) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`border-t border-[#E5E7EB] ${className}`}>
      <div>{renderToggle(isOpen, () => setIsOpen((prev) => !prev))}</div>
      <ul className={`overflow-y-hidden ${isOpen ? 'h-auto':'h-0'}`}>
        {items.map(({ text }, index) => (
          <li className='px-4 h-9 leading-9 border-t border-[#E5E7EB]' key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
