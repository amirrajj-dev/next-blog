'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here, possibly sending data to an API route

    // Show a success message with SweetAlert2
    Swal.fire({
      title: 'پیام ارسال شد!',
      text: 'متشکریم که با ما در تماس هستید.',
      icon: 'success',
      confirmButtonText: 'باشه',
    });

    // Clear the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-darkBg p-8'>
      <div className='max-w-4xl mx-auto bg-white dark:bg-darkCard p-8 rounded shadow'>
        <h2 className='text-3xl font-bold mb-6 dark:text-darkText'>تماس با ما</h2>
        <p className='mb-4 text-gray-700 dark:text-darkText'>لطفا پیام خود را در فرم زیر وارد کنید. ما به زودی با شما تماس خواهیم گرفت.</p>
        <form onSubmit={handleSubmit} className='grid gap-6'>
          <div>
            <label className='block text-sm font-bold mb-2 dark:text-darkText'>نام</label>
            <input
              type='text'
              className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 dark:bg-darkCard dark:text-darkText'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-bold mb-2 dark:text-darkText'>ایمیل</label>
            <input
              type='email'
              className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 dark:bg-darkCard dark:text-darkText'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-bold mb-2 dark:text-darkText'>پیام</label>
            <textarea
              className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600 dark:bg-darkCard dark:text-darkText'
              rows='5'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 dark:bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 dark:hover:bg-blue-900 transition'
          >
            ارسال پیام
          </button>
        </form>
        <div className='mt-8'>
          <h3 className='text-2xl font-bold mb-4 dark:text-darkText'>اطلاعات تماس</h3>
          <p className='text-gray-700 dark:text-darkText'>آدرس: تهران، خیابان ولیعصر، پلاک 123</p>
          <p className='text-gray-700 dark:text-darkText'>تلفن: 021-12345678</p>
          <p className='text-gray-700 dark:text-darkText'>ایمیل: info@next-blog.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;