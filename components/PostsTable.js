'use client';
import { deletePostAction, updatePostAction, getPostAction, getPostsAction } from "@/actions/post-actions";
import React, { useState } from "react";
import Swal from "sweetalert2";
import EditPostModal from "./modals/EditModal";
import { toast } from "react-toastify";

const BlogTable = ({ posts }) => {
  const [allPosts, setAllPosts] = useState(posts);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [post, setPost] = useState([]);
  
  const showBlogBody = (blogBody) => {
    Swal.fire({
      icon: 'info',
      title: 'بدنه بلاگ',
      text: blogBody,
      confirmButtonText: 'باشه',
      confirmButtonColor: '#3085d6',
      showCancelButton: false,
    });
  };

  const deleteBlog = async (blogId) => {
    Swal.fire({
      title: 'آیا از حذف اطمینان دارید ؟',
      text: "این بلاگ حذف خواهد شد!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'بیخیالش',
      confirmButtonText: 'بله، حذف کنید!'
    }).then(async (res) => {
      if (res.isConfirmed) {
        const res = await deletePostAction(blogId);
        if (res.status === 200) {
          Swal.fire({
            icon: 'success',
            title: 'بلاگ با موفقیت حذف شد!',
            confirmButtonText: 'باشه',
            confirmButtonColor: '#3085d6',
          });
          const updatedPosts = await getPostsAction();
          setAllPosts(updatedPosts);
        }
      }
    });
  };

  const showEditModal = async (postTitle) => {
    setIsShowEditModal(true);
    const post = await getPostAction(postTitle);
    setPost(post);
  };

  const closeEditModal = () => {
    setIsShowEditModal(false);
  };

  const updateBlog = async (blogId, data) => {
    setIsShowEditModal(false);
    const result = await updatePostAction(blogId, data);
    if (result.success) {
      toast.success('پست با موفقیت آپدیت شد', {
        position: 'bottom-center',
      });
      const posts = await getPostsAction();
      setAllPosts(posts);
    }
  };

  return (
    <div className="mt-10 p-6 bg-white dark:bg-darkCard rounded-lg shadow-lg overflow-x-auto">
      <h2 className="text-2xl font-semibold mb-4 text-right dark:text-darkText">مدیریت بلاگ ها</h2>
      <table className="min-w-full divide-y divide-gray-200 text-center dark:divide-gray-700">
        <thead className="bg-gray-100 dark:bg-darkCard">
          <tr>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">شناسه</th>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">عنوان</th>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">توضیحات</th>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">ویرایش</th>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">حذف</th>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">نویسنده</th>
            <th className="py-3 px-4 text-xs font-medium text-gray-500 dark:text-darkText uppercase">تاریخ ایجاد</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-darkCard divide-y divide-gray-200 dark:divide-gray-700">
          {allPosts.map((post, index) => (
            <tr key={post._id}>
              <td className="py-6 px-4 whitespace-nowrap dark:text-darkText">{index + 1}</td>
              <td className="py-6 px-4 whitespace-nowrap dark:text-darkText">{post.title}</td>
              <td className="py-6 px-4 whitespace-nowrap">
                <button
                  className="bg-blue-600 text-white rounded-3xl p-2 px-3 transition-all hover:text-blue-600 hover:bg-transparent hover:ring-2 hover:ring-blue-600 dark:hover:text-darkText"
                  onClick={() => showBlogBody(post.body)}
                >
                  مشاهده بدنه بلاگ
                </button>
              </td>
              <td className="py-6 px-4 whitespace-nowrap">
                <button
                  className="bg-emerald-600 text-white rounded-3xl p-2 px-3 transition-all hover:text-emerald-600 hover:bg-transparent hover:ring-2 hover:ring-emerald-600 dark:hover:text-darkText"
                  onClick={() => showEditModal(post.title)}
                >
                  ویرایش بلاگ
                </button>
              </td>
              <td className="py-6 px-4 whitespace-nowrap">
                <button
                  className="bg-red-600 text-white rounded-3xl p-2 px-3 transition-all hover:text-red-600 hover:bg-transparent hover:ring-2 hover:ring-red-600 dark:hover:text-darkText"
                  onClick={() => deleteBlog(post._id)}
                >
                  حذف بلاگ
                </button>
              </td>
              <td className="py-6 px-4 whitespace-nowrap dark:text-darkText">{post.author}</td>
              <td className="py-6 px-4 whitespace-nowrap dark:text-darkText">{new Date(post.createdAt).toLocaleDateString('fa-IR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {isShowEditModal && (
        <EditPostModal blog={post} onClose={closeEditModal} show={showEditModal} onSave={updateBlog} />
      )}
    </div>
  );
};

export default BlogTable;