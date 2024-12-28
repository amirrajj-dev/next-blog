import Link from 'next/link';
import { Icon } from 'lucide-react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mt-8 bg-blue-600 dark:bg-darkBlue py-6 px-4 text-white'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-y-2 md:gap-0 md:flex-row'>
        <div className='flex flex-col justify-center items-center md:items-start md:justify-start'>
          <div className='flex items-center justify-center gap-x-2'>
            <h2 className='font-dana-bold text-xl'>نکست بلاگ</h2>
            <Image
              src='/blog.svg'
              alt='logo'
              width={32}
              height={32}
              quality={100}
              className='w-9 -translate-y-1.5'
            />
          </div>
          <p className='text-sm'>© 2024 کلیه حقوق محفوظ است.</p>
        </div>
        <div className='flex items-center justify-center gap-x-6 my-2 md:my-0'>
          <Link href='/' className='text-white hover:text-gray-200'>
            خانه
          </Link>
          <Link href='/about-us' className='text-white hover:text-gray-200'>
            درباره ما
          </Link>
          <Link href='/blog' className='text-white hover:text-gray-200'>
            بلاگ
          </Link>
          <Link href='/contact' className='text-white hover:text-gray-200'>
            تماس با ما
          </Link>
        </div>
        <div className='flex items-center justify-center gap-x-6'>
          <Instagram className='cursor-pointer' />
          <Twitter className='cursor-pointer' />
          <Facebook className='cursor-pointer' />
        </div>
      </div>
    </footer>
  );
}