'use client';
import { createCommentAction } from '@/actions/comment-actions';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const CommentSection = ({ postId, initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = async () => {
    if (newComment.trim() === '') return;
    const addedComment = await createCommentAction({ body: newComment, postId });

    if (addedComment.success) {
      toast.success('کامنت شما با موفقیت به ثبت رسید', {
        position: 'bottom-center',
      });
      setComments([...comments, addedComment.comment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-10 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-darkBlue dark:to-darkPurple p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-white">نظرات کاربران</h2>
      <div className="mb-4 bg-white dark:bg-darkCard p-4 rounded-lg shadow-md">
        <textarea
          className="w-full border rounded px-3 py-2 mb-2 outline-none focus:ring-2 focus:ring-blue-600 dark:bg-darkCard dark:text-darkText"
          rows="4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="نظر خود را بنویسید..."
          required
        />
        <button
          onClick={handleAddComment}
          className="bg-gradient-to-r from-green-400 to-blue-600 dark:from-darkBlue dark:to-darkPurple text-white px-4 py-2 rounded-full hover:from-blue-600 hover:to-purple-600 transition-colors flex items-center gap-2"
        >
          <Send size={16} />
          ارسال
        </button>
      </div>
      <div>
        {comments && comments.length > 0 ? (
          comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white dark:bg-darkCard p-4 mb-4 rounded-lg shadow-md flex gap-4 items-start transition-transform transform hover:scale-105"
            >
              <img
                src="https://secure.gravatar.com/avatar/7e1b956494f6b76cbda6b2625e179e28?s=96&d=mm&r=g"
                alt="User profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-bold text-blue-800 dark:text-darkText">{comment.name}</p>
                <p className="text-gray-700 dark:text-darkText">{comment.body}</p>
                <span className="block text-gray-500 dark:text-darkText text-sm">{new Date(comment.createdAt).toLocaleDateString('fa-IR')}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white">هنوز نظری ثبت نشده است. اولین نظر را شما ثبت کنید!</p>
        )}
      </div>
    </div>
  );
};

export default CommentSection;