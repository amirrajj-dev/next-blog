import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-darkBg">
      <h2 className='text-8xl blur-[1px] animate-pulse text-gray-600 dark:text-darkText font-dana-bold'>404</h2>
      <h1 className="text-4xl font-bold text-gray-800 dark:text-darkText mb-4">صفحه مورد نظر یافت نشد</h1>
      <p className="text-gray-600 dark:text-darkText mb-8">متاسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.</p>
      <Link href="/" className="bg-blue-600 dark:bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition duration-300">
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFound;