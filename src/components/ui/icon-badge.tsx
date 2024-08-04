import React, { ReactNode } from 'react';

interface IIconBadge {
  children: ReactNode;
  number: number;
}

export const IconBadge = ({ children, number }: IIconBadge) => {
  return (
    <div className='relative cursor-pointer'>
      {children}
      <span
        style={{ top: '-8px', right: '-8px' }}
        className='text-xs absolute w-4 h-4 bg-red-400 text-white rounded-full keep-line justify-center'
      >
        {number}
      </span>
    </div>
  );
};
