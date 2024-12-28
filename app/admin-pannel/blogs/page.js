import Blogform from "@/components/Blogform";
import PostsTable from "@/components/PostsTable";
import connectToDb from "@/utils/db/connectToDb";
import postsModel from "@/utils/models/post";

const Blogs = async () => {
  await connectToDb();
  const blogs = await postsModel.find({}).lean();

  return (
    <>
      <div className="flex flex-col">
        <div className="mt-10 p-6 bg-white dark:bg-darkCard rounded-lg shadow-lg flex">
          <Blogform />
        </div>
        <PostsTable posts={JSON.parse(JSON.stringify(blogs))} />
      </div>
    </>
  );
};

export default Blogs;