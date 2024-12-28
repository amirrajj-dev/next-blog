'use client';
import { getPostsAction } from '@/actions/post-actions';
import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';

const BlogBox = dynamic(() => import('@/components/BlogBox'), {
  loading: () => <div>در حال بارگزاری ...</div>,
});

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const posts = await getPostsAction();
      setPosts(posts);
    };
    getPosts();
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto mt-10 p-6 bg-white dark:bg-darkCard rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-darkText">وبلاگ نکست بلاگ</h1>
      <p className="text-lg text-center mb-10 dark:text-darkText">
        به وبلاگ نکست بلاگ خوش آمدید در اینجا مقاله های روز مرتبط به برنامه نویسی را پیدا می کنید
      </p>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="جستجو بین مطالب..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg text-gray-700 dark:bg-darkCard dark:text-darkText focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-600"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0
          ? filteredPosts.map((post) => <BlogBox key={post._id} post={post} />)
          : posts.map((post) => <BlogBox key={post._id} post={post} />)}
      </div>
    </div>
  );
};

export default Blog;