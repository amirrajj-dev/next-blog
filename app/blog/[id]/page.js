import Image from 'next/image';
import { getPostAction } from '@/actions/post-actions';
import { notFound } from 'next/navigation';
import React from 'react';
import CommentSection from '@/components/CommentSection';
import { getCommentsByPostId } from '@/actions/comment-actions';

const MainBlog = async ({ params }) => {
  const id = (await params).id;
  const post = await getPostAction(id);
  if (!post) notFound();

  const comments = await getCommentsByPostId(id);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white dark:bg-darkCard rounded-lg shadow-lg">
      <Image
        src={`/blogs/${post.image}`}
        width={800}
        height={450}
        quality={100}
        alt={post.title || 'post pic'}
        className="w-full h-64 object-cover rounded-t-lg mb-4"
      />
      <h1 className="text-4xl font-bold mb-4 dark:text-darkText">{post.title}</h1>
      <p className="text-gray-600 dark:text-darkText mb-4">نویسنده: {post.author}</p>
      <p className="text-gray-600 dark:text-darkText mb-4">تاریخ انتشار: {new Date(post.createdAt).toLocaleDateString('fa-IR')}</p>
      <div className="text-gray-700 dark:text-darkText leading-relaxed mb-6">{post.body}</div>

      <CommentSection postId={post._id} initialComments={comments} />
    </div>
  );
};

export async function generateMetadata({ params, searchParams }) {
  const id = (await params).id;
  const post = await getPostAction(decodeURI(id));

  return {
    title: `نکست بلاگ | ${post.title}`,
    description: post.body,
  };
}

export default MainBlog;