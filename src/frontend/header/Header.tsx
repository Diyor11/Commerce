import LogoImg from '@/assets/MainLogo.png'
import { IconBadge } from '@/components/ui/icon-badge'
import { Heart, MapPin, Search, ShoppingCart, UserRound } from 'lucide-react'
export default function Header() {
  return (
    <header>
      <div className="container mx-auto py-4 px-3">
        <div className="keep-line justify-between gap-6">
          <img src={LogoImg} alt="logo" width={'140'} height={'34'} />
          <div className="keep-line gap-4">
            <MapPin /> <span className="text-sm text-secondary">Delivery All</span>
          </div>
          <form className='block grow bg-[#F3F4F6] h-8 px-3 rounded-sm relative'>
            <Search className='absolute right-2 top-2' color='gray' style={{translate: "0 -4px 0"}} />
            <input placeholder='Search...' type="text" className='w-full bg-transparent h-full pr-6' />
          </form>
          <div className="keep-line gap-4">
            <UserRound /> <span className="text-sm text-secondary">SignIn Account</span>
          </div>
          <IconBadge number={0}>
            <Heart />
          </IconBadge>
          <IconBadge number={0}>
            <ShoppingCart />
          </IconBadge>
        </div>
      </div>
    </header>
  )
}
