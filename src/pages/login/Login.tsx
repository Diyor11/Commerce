import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AuthWrap } from '@/frontend';
import { Link } from 'react-router-dom';

import GoogleIcon from '@/assets/google.png'
import AppleIcon from '@/assets/apple.png'
import { Separator } from '@/components/ui/separator';

export default function Login() {
  return (
    <AuthWrap>
      <div className='box w-full'>
        <div className='mb-9'>
          <h2 className='text-3xl mb-2'>Welcome Back</h2>
          <p>
            Don’t have an account?{' '}
            <Link to='/signup' className='text-blue-700'>
              Sign Up
            </Link>
          </p>
        </div>
        <form action='' className='flex flex-col w-full gap-4'>
          <Input placeholder='Email' className='focus:border-gray-700' />
          <Input type='password' placeholder='Password' className='focus:border-gray-700' />
          <Button className='bg-[#312ECB] hover:bg-[#7574c2] h-12 w-full text-white'>Send</Button>
          <div className='flex items-center gap-3 justify-center'>
            <Separator style={{ width: 'calc(50% - 25px)' }} />
            or
            <Separator style={{ width: 'calc(50% - 25px)' }} />
          </div>
          <Button variant={'outline'}>
            <img width='20' className='block mr-2' height={'20'} src={GoogleIcon} alt="google" />
            Continue with Google
          </Button>
          <Button variant={'outline'}>
            <img width='20' className='block mr-2' height={'20'} src={AppleIcon} alt="google" />
            Continue with Apple
          </Button>
        </form>
      </div>
    </AuthWrap>
  );
}
