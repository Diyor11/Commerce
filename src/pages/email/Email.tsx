import { Button } from '@/components/ui/button';
import { AuthWrap } from '@/frontend';
import { Link } from 'react-router-dom';

export default function Email() {
  return (
    <AuthWrap>
      <div className='box w-full'>
        <div className='mb-9'>
          <h2 className='text-3xl mb-2'>Verify your Email</h2>
          <p>
            We have sent a verification email to <Link to='#' className='text-blue-700'>n****e@e***e.com.</Link>
          </p>
        </div>
        <div className='mb-5'>
          <p>Didn’t receive the email? Check spam or promotion folder or</p>
        </div>
        <Button className='bg-[#312ECB] hover:bg-[#7574c2] h-12 w-full text-white'>Resend Email</Button>
      </div>
    </AuthWrap>
  );
}
