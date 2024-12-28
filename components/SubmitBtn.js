'use client';
import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

function SubmitBtn({ onSubmit }) {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const handleBtnClick = () => {
    startTransition(() => isPending);
    onSubmit();
  };

  if (pathname === '/auth/signup') {
    return (
      <button
        type='submit'
        className='w-full rounded-lg bg-blue-500 dark:bg-blue-700 p-3 font-bold text-white transition-colors hover:bg-blue-600 dark:hover:bg-blue-800'
        disabled={isPending}
      >
        ثبت نام
      </button>
    );
  }

  if (pathname === '/auth/signin') {
    return (
      <button
        type='submit'
        className='w-full rounded-lg bg-blue-500 dark:bg-blue-700 p-3 font-bold text-white transition-colors hover:bg-blue-600 dark:hover:bg-blue-800'
        disabled={isPending}
        onClick={handleBtnClick}
      >
        ورود
      </button>
    );
  }
}

export default SubmitBtn;