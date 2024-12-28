'use client';
import React from 'react';
import { X, Trash2 } from 'lucide-react';

const DeleteModal = ({ show, onClose, onDelete, user }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-darkCard rounded-lg shadow-lg max-w-sm w-full p-6">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400">حذف کاربر</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
            <X size={24} />
          </button>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-darkText">
            آیا مطمئن هستید که می‌خواهید کاربر <span className="font-bold">{user.name}</span> را حذف کنید؟ این عملیات غیرقابل بازگشت است.
          </p>
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-700 dark:bg-darkBg dark:text-darkText rounded hover:bg-gray-300 dark:hover:bg-gray-700">
            لغو
          </button>
          <button onClick={() => onDelete(user._id)} className="px-4 py-2 bg-red-600 text-white dark:bg-red-500 dark:text-darkText rounded hover:bg-red-700 dark:hover:bg-red-600 flex items-center gap-2">
            <Trash2 size={16} />
            حذف
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;