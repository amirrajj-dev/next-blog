'use client';
import React, { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

const EditBlogModal = ({ show, onClose, onSave, blog }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title || '');
      setBody(blog.body || '');
    } else {
      setTitle('');
      setBody('');
    }
  }, [blog]);

  const handleSave = (blogId) => {
    const updatedBlog = { ...blog, title, body };
    onSave(blogId, updatedBlog);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-darkCard rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">ویرایش بلاگ</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <X size={24} />
          </button>
        </div>
        <div className="mt-4">
          <label className="block text-sm font-bold mb-2 dark:text-darkText">عنوان</label>
          <input
            type="text"
            className="w-full border rounded px-3 py-2 dark:bg-darkCard dark:text-darkText"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm font-bold mb-2 dark:text-darkText">متن</label>
          <textarea
            className="w-full border rounded px-3 py-2 dark:bg-darkCard dark:text-darkText"
            rows="10"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 dark:bg-darkBg dark:text-darkText rounded hover:bg-gray-300 dark:hover:bg-gray-700">
            لغو
          </button>
          <button onClick={() => handleSave(blog._id)} className="px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-darkText rounded hover:bg-blue-700 dark:hover:bg-blue-600 flex items-center gap-2">
            <Save size={16} />
            ذخیره
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBlogModal;