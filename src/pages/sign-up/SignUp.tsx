import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { AuthWrap } from '@/frontend';
import {  } from "lucide-react"
import { Link } from 'react-router-dom';
import GoogleIcon from '@/assets/google.png'
import AppleIcon from '@/assets/apple.png'

export default function SignUp() {
  return (
    <AuthWrap>
      <div className='box w-full'>
        <div className='mb-9'>
          <h2 className='text-3xl mb-2'>Create account</h2>
          <p>
            Already have an account?{' '}
            <Link to='/login' className='text-blue-700'>
              Login
            </Link>
          </p>
        </div>
        <form className='w-full flex flex-col gap-4' action=''>
          <div className='flex items-center gap-2'>
            <Input placeholder='Firstname' className='focus:border-gray-700' />
            <Input placeholder='Lastname' className='focus:border-gray-700' />
          </div>
          <Input placeholder='Email' className='focus:border-gray-700' />
          <Input type='password' placeholder='Email' className='focus:border-gray-700' />
          <div className='flex items-center gap-2'>
            <Checkbox id='terms' />
            <Label htmlFor='terms'>
              I agree to DopeSass{' '}
              <Link className='text-blue-700' to='#'>
                Terms of service
              </Link>{' '}
              and{' '}
              <Link className='text-blue-700' to='#'>
                Privacy policy
              </Link>
            </Label>
          </div>
          <Button className='bg-[#312ECB] hover:bg-[#7574c2] h-12 w-full text-white'>Submit</Button>
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
