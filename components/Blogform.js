'use client';
import React, { useState } from 'react';
import Swal from "sweetalert2";
import { createPostAction } from "@/actions/post-actions";

function Blogform() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState('');

  return (
    <form
      action={async (formdata) => {
        const res = await createPostAction(formdata);
        if (res.status === 201) {
          Swal.fire({
            icon: 'success',
            title: 'با موفقیت انجام شد',
            text: 'پست شما با موفقیت ایجاد شد.',
            confirmButtonText: 'باشه',
            confirmButtonColor: '#3085d6',
            showCancelButton: false,
          });
          setTitle('');
          setDescription('');
          setImage(null);
          setAuthor('');
        }
      }}
      className='w-full'
    >
      <h2 className='mb-4 text-right text-2xl font-semibold dark:text-darkText'>ایجاد پست جدید</h2>
      <div className='mb-4'>
        <label
          className='mb-2 block text-right text-sm font-bold text-gray-700 dark:text-darkText'
          htmlFor='title'
        >
          عنوان
        </label>
        <input
          type='text'
          id='title'
          name='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='focus:shadow-outline w-full rounded-lg border px-3 py-2 text-gray-700 dark:bg-darkCard dark:text-darkText focus:outline-none focus:ring-2 focus:ring-blue-600'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='mb-2 block text-right text-sm font-bold text-gray-700 dark:text-darkText'
          htmlFor='body'
        >
          توضیحات
        </label>
        <textarea
          id='body'
          name='body'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className='focus:shadow-outline w-full rounded-lg border px-3 py-2 text-gray-700 dark:bg-darkCard dark:text-darkText focus:outline-none focus:ring-2 focus:ring-blue-600'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='mb-2 block text-right text-sm font-bold text-gray-700 dark:text-darkText'
          htmlFor='author'
        >
          نویسنده
        </label>
        <input
          type='text'
          id='author'
          name='author'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className='focus:shadow-outline w-full rounded-lg border px-3 py-2 text-gray-700 dark:bg-darkCard dark:text-darkText focus:outline-none focus:ring-2 focus:ring-blue-600'
          required
        />
      </div>
      <div className='mb-4'>
        <label
          className='mb-2 block text-right text-sm font-bold text-gray-700 dark:text-darkText'
          htmlFor='image'
        >
          فایل تصویر
        </label>
        <input
          type='file'
          id='image'
          onChange={(e) => setImage(e.target.files[0])}
          className='focus:shadow-outline w-full rounded-lg border px-3 py-2 text-gray-700 dark:bg-darkCard dark:text-darkText focus:outline-none focus:ring-2 focus:ring-blue-600'
          required
          name='image'
        />
      </div>
      <button
        type='submit'
        className='focus:shadow-outline w-full rounded-lg bg-blue-500 dark:bg-blue-700 px-4 py-2 text-white hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600'
      >
        ارسال
      </button>
    </form>
  );
}

export default Blogform;