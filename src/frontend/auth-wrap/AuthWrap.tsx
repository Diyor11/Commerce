import { ReactNode } from 'react';
import LogoImg from '@/assets/Logo.png';
import styles from './styles.module.css';

export default function AuthWrap({ children }: { children: ReactNode }) {
  return (
    <div className='w-full  min-h-screen flex items-stretch'>
      <div
        className={`${styles.intro_sidebg} relative intro-sidebg p-20 h-auto w-1/2 hidden lg:flex flex-col justify-between bg-[#040308]`}
      >
        <div className='flex items-center gap-3'>
          <img width={'64'} height={'50'} src={LogoImg} alt='logo' />
          <span className='text-4xl font-bold text-white'>DopeSaas</span>
        </div>
        <div>
          <h3 className='text-4xl text-white mb-5 font-bold'>Numquam architecto iure</h3>
          <p className='text-2xl text-white'>
            Ut corrupti est molestiae occaecati voluptatem vel harum explicabo numquam.
          </p>
        </div>
      </div>
      <div className='lg:w-1/2 w-full h-auto'>
        <div className="md:hidden flex h-14 w-full bg-black lg:px-16 px-3">
          <img src={LogoImg} width="65" alt="" />
        </div>
        <div style={{height: 'calc(100% - 56px)'}} className=" max-w-[600px] mx-auto flex items-center lg:px-16 px-3">
          {children}
        </div>
      </div>
    </div>
  );
}
