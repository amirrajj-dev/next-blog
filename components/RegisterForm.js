'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Swal from 'sweetalert2';
import SubmitBtn from './SubmitBtn';
import { createUserAction } from '@/actions/auth-actions';
import { signIn } from 'next-auth/react';
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    const res = await createUserAction(formData);
    if (res.ok) {
      await signIn('credentials', {
        email: formData.get('email'),
        password: formData.get('password'),
        callbackUrl: '/'
      });
    } else {
      Swal.fire({
        icon : 'error',
        title : 'خطا',
        text : 'کاربر وجود دارد یا عملیات ثبت نام موفقیت آمیز نبود',
        confirmButtonText: 'مجددا تلاش کنید'
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-darkBg font-dana-light">
      <div className="w-full max-w-md rounded-lg bg-white dark:bg-darkCard p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 dark:text-darkText">ثبت نام در نکست بلاگ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-2 block font-bold text-gray-700 dark:text-darkText" htmlFor="name">
              نام
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none dark:bg-darkCard dark:text-darkText"
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block font-bold text-gray-700 dark:text-darkText" htmlFor="email">
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none dark:bg-darkCard dark:text-darkText"
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block font-bold text-gray-700 dark:text-darkText" htmlFor="password">
              رمز عبور
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border p-3 focus:border-blue-500 focus:outline-none dark:bg-darkCard dark:text-darkText text-black/80"
              placeholder="رمز عبور خود را وارد کنید"
              required
            />
          </div>
          <SubmitBtn />
        <Link href={'/auth/signin'} className='text-blue-600 dark:text-blue-400 inline-block mt-2 text-sm font-dana-regular'>قبلا ثبت نام کرده اید؟ وارد شوید</Link>
        </form>
      </div>
    </div>
  );
}