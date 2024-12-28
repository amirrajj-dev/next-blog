'use client';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Globe, Mail, Facebook, Twitter, Instagram, Save } from 'lucide-react';
import Link from 'next/link';

const Settings = () => {
  const { data: session } = useSession();
  const [siteName, setSiteName] = useState('');
  const [siteDescription, setSiteDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  if (!session) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100 dark:bg-darkBg'>
        <Link href={'/auth/signin'} className='text-blue-600 dark:text-blue-400'>
          لطفا وارد حساب کاربری خود شوید.
        </Link>
      </div>
    );
  }

  const handleSave = async () => {
    const settings = {
      siteName,
      siteDescription,
      contactEmail,
      socialMedia: {
        facebook,
        twitter,
        instagram,
      },
    };

    // Send settings to API for saving
    await fetch('/api/admin/settings', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    });

    alert('تنظیمات با موفقیت ذخیره شد!');
  };

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-darkBg p-8'>
      <h2 className='text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center gap-x-2'>
        <Globe className='text-blue-600 dark:text-blue-400' size={28} />
        تنظیمات سایت
      </h2>
      <div className='bg-white dark:bg-darkCard p-6 rounded-lg shadow-lg'>
        <div className='mb-4'>
          <label className='text-sm font-bold mb-2 flex items-center gap-x-2 dark:text-darkText'>
            <Globe className='text-blue-600 dark:text-blue-400' size={20} />
            نام سایت
          </label>
          <input
            type='text'
            className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 dark:bg-darkCard dark:text-darkText'
            value={siteName}
            onChange={(e) => setSiteName(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='text-sm font-bold mb-2 flex items-center gap-x-2 dark:text-darkText'>
            <Mail className='text-blue-600 dark:text-blue-400' size={20} />
            توضیحات سایت
          </label>
          <textarea
            className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 dark:bg-darkCard dark:text-darkText'
            rows='4'
            value={siteDescription}
            onChange={(e) => setSiteDescription(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='text-sm font-bold mb-2 flex items-center gap-x-2 dark:text-darkText'>
            <Mail className='text-blue-600 dark:text-blue-400' size={20} />
            ایمیل تماس
          </label>
          <input
            type='email'
            className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 dark:bg-darkCard dark:text-darkText'
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='text-sm font-bold mb-2 flex items-center gap-x-2 dark:text-darkText'>
            <Facebook className='text-blue-600 dark:text-blue-400' size={20} />
            فیسبوک
          </label>
          <input
            type='url'
            className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 dark:bg-darkCard dark:text-darkText'
            value={facebook}
            onChange={(e) => setFacebook(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-sm font-bold mb-2 flex items-center gap-x-2 dark:text-darkText'>
            <Twitter className='text-blue-600 dark:text-blue-400' size={20} />
            توییتر
          </label>
          <input
            type='url'
            className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 dark:bg-darkCard dark:text-darkText'
            value={twitter}
            onChange={(e) => setTwitter(e.target.value)}
          />
        </div>
        <div className='mb-4'>
          <label className='text-sm font-bold mb-2 flex items-center gap-x-2 dark:text-darkText'>
            <Instagram className='text-blue-600 dark:text-blue-400' size={20} />
            اینستاگرام
          </label>
          <input
            type='url'
            className='w-full border rounded px-3 py-2 outline-none focus:ring-2 focus:ring-sky-600 dark:bg-darkCard dark:text-darkText'
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
          />
        </div>
        <div className='mt-6 flex justify-end'>
          <button
            onClick={handleSave}
            className='px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded hover:bg-blue-700 dark:hover:bg-blue-800 transition flex items-center gap-x-2'
          >
            <Save size={16} />
            ذخیره تنظیمات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;