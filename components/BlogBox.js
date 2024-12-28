import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BlogBox = ({ post }) => {
  // const slug = post.title.replace(/\s+/g, '-') // Converts "First Post Title" to "first-post-title"
  return (
    <div className="bg-white dark:bg-darkCard shadow-md rounded-lg overflow-hidden transform transition duration-500 hover:scale-105">
      <Image 
        src={`/blogs/${post.image}`} 
        width={800} 
        height={450} 
        quality={100} 
        alt={post.title} 
        className="w-full h-48 object-cover" 
      />
      <div className="p-6">
        <h2 className="text-lg h-16 font-semibold mb-2 text-gray-800 dark:text-darkText hover:text-blue-500 transition duration-300">
          <Link className="text-blue-600 dark:text-blue-400 hover:underline" href={`/blog/${post._id}`}>
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-700 dark:text-darkText mb-4 line-clamp-4">
          {/* {post.description.length > 150 ? post.description.substring(0, 147) + '...' : post.description} */}
          {post.body}
        </p>
        <div className="flex items-center justify-between text-gray-500 dark:text-darkText text-sm">
          <div>نویسنده: {post.author}</div>
          <div>تاریخ انتشار: {new Date(post.createdAt).toLocaleDateString('fa-IR')}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogBox;