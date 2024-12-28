import AdminPannelHome from '@/components/AdminPannelHome';
import Link from 'next/link';
import React from 'react';
import {
  User,
  PenOff,
  ChartLine,
  FileText,
  Settings,
  Home,
  Users,
} from 'lucide-react';

function AdminLayout({ children }) {
  return (
    <div className='min-h-screen bg-white  dark:bg-darkBg p-5'>
      <header className='mb-8 w-full rounded-lg bg-blue-600 dark:bg-darkBlue p-6 text-center text-white shadow-lg'>
        <h1 className='font-dana-bold text-4xl'>پنل مدیریت نسکت بلاگ</h1>
      </header>

      <div className='grid grid-cols-1 gap-6'>
        {/* Sidebar */}
        <aside className='rounded-lg bg-white dark:bg-darkCard p-4 shadow-xl lg:col-span-1'>
          <nav>
            <ul className='space-y-4'>
              <li className='flex items-center space-x-2'>
                <Home className='text-blue-600 dark:text-blue-400' size={24} />
                <Link href='/admin-pannel/dashboard'>
                  <span className='font-dana-bold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 translate-y-1.5 mr-1'>
                    داشبورد
                  </span>
                </Link>
              </li>
              <li className='flex items-center space-x-2'>
                <Users className='text-blue-600 dark:text-blue-400' size={24} />
                <Link href='/admin-pannel/users'>
                  <span className='font-dana-bold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 translate-y-1.5 mr-1'>
                    مدیریت کاربران
                  </span>
                </Link>
              </li>
              <li className='flex items-center space-x-2'>
                <FileText className='text-blue-600 dark:text-blue-400' size={24} />
                <Link href='/admin-pannel/blogs'>
                  <span className='font-dana-bold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 translate-y-1.5 mr-1'>
                    مدیریت بلاگ ها
                  </span>
                </Link>
              </li>
              <li className='flex items-center space-x-2'>
                <Settings className='text-blue-600 dark:text-blue-400' size={24} />
                <Link href='/admin-pannel/settings'>
                  <span className='font-dana-bold text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-purple-400 translate-y-1.5 mr-1'>
                    تنظیمات
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        {children}
      </div>
    </div>
  );
}

export default AdminLayout;