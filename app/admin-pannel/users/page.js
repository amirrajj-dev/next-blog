'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { UserPlus, Edit2, Trash2, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { deleteUser, getUser, getUsersAction } from '@/actions/user-actions';
import DeleteModal from '@/components/modals/DeleteModal';
import { toast } from 'react-toastify';

const Users = () => {
  const { data: session } = useSession();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const router = useRouter();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  useEffect(() => {
    const getAllUsers = async () => {
      const usersData = await getUsersAction();
      setUsers(usersData);
    };
    getAllUsers();
  }, []);

  const handleEdit = (userId) => {
    // Handle edit user functionality
  };

  const handleOpenModal = async (userId) => {
    const user = await getUser(userId);
    setUser(user.user);
    setDeleteModalOpen(true);
  };

  const handleDelete = async (userId) => {
    const result = await deleteUser(userId);
    if (result.success) {
      toast.success('کاربر با موفقیت حذف شد', {
        position: 'bottom-center',
      });
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
      setDeleteModalOpen(false);
    } else {
      toast.error('خطا در حذف کاربر');
    }
  };

  if (!session) {
    return (
      <div className='flex min-h-screen items-center justify-center bg-gray-100 dark:bg-darkBg'>
        <Link href={'/auth/signin'} className='text-blue-600 dark:text-blue-400'>
          لطفا وارد حساب کاربری خود شوید.
        </Link>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100 dark:bg-darkBg p-8'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-3xl font-bold text-blue-600 dark:text-blue-400'>مدیریت کاربران</h2>
      </div>
      <div className='overflow-x-auto'>
        <table className='min-w-full bg-white dark:bg-darkCard rounded-lg shadow-lg overflow-hidden'>
          <thead className='bg-blue-600 dark:bg-darkBlue text-white'>
            <tr>
              <th className='py-3 px-4 text-right dark:text-darkText'>نام</th>
              <th className='py-3 px-4 text-right dark:text-darkText'>ایمیل</th>
              <th className='py-3 px-4 text-right dark:text-darkText'>نقش</th>
              <th className='py-3 px-4 text-right dark:text-darkText'>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className='border-b hover:bg-gray-50 dark:hover:bg-gray-600 transition'>
                <td className='py-3 px-4 dark:text-darkText'>{user.name}</td>
                <td className='py-3 px-4 dark:text-darkText'>{user.email}</td>
                <td className='py-3 px-4 dark:text-darkText'>{user.role}</td>
                <td className='py-3 px-4 flex items-center -translate-x-3'>
                  <button onClick={() => handleOpenModal(user._id)} className='text-red-600 hover:text-red-800 transition'>
                    <Trash2 className='text-lg' />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {deleteModalOpen && <DeleteModal show={true} user={JSON.parse(JSON.stringify(user))} onDelete={handleDelete} onClose={() => setDeleteModalOpen(false)} />}
      </div>
    </div>
  );
};

export default Users;