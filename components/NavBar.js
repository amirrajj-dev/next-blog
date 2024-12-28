'use client';
import { useSession, signOut } from 'next-auth/react';
import { AlignJustify } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import SwitchBtn from './SwitchBtn';

const Navbar = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleSignOut = async () => {
    const isSure = confirm('آیا از خروج اطمینان دارید؟');
    if (isSure) {
      await signOut({
        redirect: '/',
      });
    }
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleDarkAndLightMode = (checked)=>{
    
    const body = document.querySelector('body');
    if (!checked) {
      body.classList.add('dark');
      body.style.backgroundColor = '#1f2937'
    } else {
      body.classList.remove('dark');
      body.style.backgroundColor = '#f7f7f7'
    }
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav className='hidden bg-blue-600 dark:bg-darkBlue p-4 font-dana-regular md:block text-nowrap'>
        <div className='container mx-auto flex items-center justify-between'>
          <div className='flex items-center justify-center gap-x-2 text-white'>
            <Link href={'/'} className='font-dana-bold text-xl'>
              نکست بلاگ
            </Link>
            <Image
              src='https://www.svgrepo.com/show/130741/blog.svg'
              alt='logo'
              width={36}
              height={36}
              quality={100}
              className='w-9 -translate-y-1.5'
            />
            <div className='mr-6 flex items-center justify-center md:gap-x-4 lg:gap-x-6'>
              <Link href='/' className='text-white hover:text-gray-200'>
                خانه
              </Link>
              <Link href='/about-us' className='text-white hover:text-gray-200'>
                درباره ما
              </Link>
              <Link href='/blog' className='text-white hover:text-gray-200'>
                بلاگ
              </Link>
              {session?.role === 'admin' ? (
                <Link href={'/admin-pannel'} className='text-white hover:text-gray-200'>
                  پنل ادمین
                </Link>
              ) : (
                <Link href={'/user-pannel'} className='text-white hover:text-gray-200'>
                  پنل کاربری
                </Link>
              )}
            </div>
          </div>
          <div className='ml-2 flex items-center justify-center gap-x-6'>
          <div className="mx-6 lg:m-0">
          <SwitchBtn handleDarkAndLightMode={handleDarkAndLightMode} />
          </div>
            {session ? (
              <>
                <div className='flex items-center justify-center gap-x-3'>
                  <div className='flex flex-col items-end gap-y-1'>
                    <span className='font-dana-bold text-sm text-white'>
                      {session?.user.email}
                    </span>
                    <span className='font-dana-light text-xs text-gray-300'>
                      {session.role === 'admin' ? 'ادمین' : 'کاربر'}
                    </span>
                  </div>
                  <Image
                    alt='profile-user'
                    src={'/profile.png'}
                    width={48}
                    height={48}
                    className='rounded-full'
                  />
                </div>
                <button
                  onClick={handleSignOut}
                  className='rounded bg-white px-4 py-2 text-blue-600 dark:text-darkBlue2 transition-colors hover:bg-gray-200'
                >
                  خروج
                </button>
              </>
            ) : (
              <>
                <Link
                  href='/auth/signin'
                  className='rounded bg-white px-4 py-2 text-blue-600 dark:text-darkBlue2 transition-colors hover:bg-gray-200'
                >
                  ورود
                </Link>
                <Link
                  href='/auth/signup'
                  className='rounded bg-white px-4 py-2 text-blue-600 dark:text-darkBlue2 transition-colors hover:bg-gray-200'
                >
                  ثبت نام
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className='block bg-blue-600 dark:bg-darkBlue p-4 font-dana-regular md:hidden'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-center text-white'>
            <Link href={'/'} className='font-dana-bold text-xl'>
              نکست بلاگ
            </Link>
            <Image
              src='https://www.svgrepo.com/show/130741/blog.svg'
              alt='logo'
              width={32}
              height={32}
              quality={100}
              className='w-9 -translate-y-1.5'
            />
          </div>
          <AlignJustify
            className='cursor-pointer text-white'
            onClick={() => setIsOpen((prev) => !prev)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='pointer-events-none fixed inset-0 z-10 block h-full w-full bg-black/80 transition-all duration-300 ease-out md:hidden'></div>
      )}
      <div
        ref={menuRef}
        className={`fixed bottom-0 right-0 top-0 z-20 block w-64 bg-blue-600 dark:bg-darkBlue p-4 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='z-20 flex items-center border-b border-gray-400 pb-1 text-white'>
          <Link href={'/'} className='font-dana-bold text-xl'>
            نکست بلاگ
          </Link>
          <Image
            src='/blog.svg'
            alt='logo'
            width={32}
            height={32}
            quality={100}
            className='w-9 -translate-y-1.5'
          />
        </div>
        <ul className='text-white'>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/' className='block px-4 py-2'>
              خانه
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/about-us' className='block px-4 py-2'>
              درباره ما
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link href='/blog' className='block px-4 py-2'>
              بلاگ
            </Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            {session?.role === 'admin' ? (
              <Link className='block px-4 py-2' href={'/admin-pannel'}>
                پنل ادمین
              </Link>
            ) : (
              <Link className='block px-4 py-2' href={'/user-pannel'}>
                پنل کاربری
              </Link>
            )}
          </li>
          <li className='w-fit mt-4'>
          <SwitchBtn />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;