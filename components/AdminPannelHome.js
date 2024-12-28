'use client';
import React, { useEffect, useState } from 'react';
import { User, PenOff, ChartLine } from 'lucide-react';
import { getPostsAction } from '@/actions/post-actions';
import { getUsersAction } from '@/actions/user-actions';

const AdminPannelHome = () => {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const posts = await getPostsAction();
      const users = await getUsersAction();
      setPosts(posts);
      setUsers(users);
    };
    fetchData();
  }, []);

  return (
    <main className='rounded-lg bg-white dark:bg-darkCard p-6 shadow-xl lg:col-span-3'>
      <h2 className='mb-4 font-dana-bold text-3xl text-gray-900 dark:text-darkText'>
        داشبورد
      </h2>
      <p className='mb-6 text-gray-700 dark:text-darkText'>
        به پنل مدیریت خوش آمدید! از اینجا می‌توانید کاربران و مقالات را مدیریت کرده و تنظیمات سایت را تغییر دهید.
      </p>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <div className='flex items-center justify-start gap-x-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 dark:from-darkBlue dark:to-darkPurple p-6 text-white shadow-lg'>
          <User className='text-5xl text-white' />
          <div>
            <h3 className='mb-2 font-dana-bold text-xl dark:text-darkText'>تعداد کاربران</h3>
            <p className='font-dana-light text-2xl'>{users.length}</p>
          </div>
        </div>
        <div className='flex items-center justify-start gap-x-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 dark:from-darkBlue dark:to-darkPurple p-6 text-white shadow-lg'>
          <PenOff className='text-5xl text-white' />
          <div>
            <h3 className='mb-2 font-dana-bold text-xl dark:text-darkText'>تعداد بلاگ ها</h3>
            <p className='font-dana-light text-2xl'>{posts.length}</p>
          </div>
        </div>
        <div className='flex items-center justify-start gap-x-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-800 dark:from-darkBlue dark:to-darkPurple p-6 text-white shadow-lg'>
          <ChartLine className='text-5xl text-white' />
          <div>
            <h3 className='mb-2 font-dana-bold text-xl dark:text-darkText'>
              بازدیدهای ماهانه
            </h3>
            <p className='font-dana-light text-2xl'>7890</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminPannelHome;