import BlogBox from "@/components/BlogBox";
import connectToDb from "@/utils/db/connectToDb";
import postsModel from "@/utils/models/post";
import { toast } from "react-toastify";

export default async function Home() {
  await connectToDb();
  const lastTwoPosts = await postsModel.find({}).lean().sort({ _id: -1 }).limit(2);
  const firstTwoPosts = await postsModel.find({}).lean().limit(2);
  const middleTwoPosts = await postsModel.find({}).lean().skip(2).sort({ _id: -1 }).limit(2);

  return (
    <div className="bg-gray-100 dark:bg-darkBg min-h-screen flex flex-col items-center p-5">
      <header className="w-full bg-blue-600 dark:bg-blue-900 p-6 rounded-lg shadow-lg text-center text-white mb-8">
        <h1 className="text-4xl font-bold">به نکست بلاگ خوش آمدید</h1>
        <p className="text-lg mt-2">مکان شما برای یادگیری و اشتراک گذاری دانش در زمینه تکنولوژی</p>
      </header>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">آخرین مقالات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lastTwoPosts.map(post => (
            <BlogBox post={post} key={post._id} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">مطالب ویژه</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {firstTwoPosts.map(post => (
            <BlogBox post={post} key={post._id} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">درباره نکست بلاگ</h2>
        <p className="text-lg text-gray-700 dark:text-darkText leading-relaxed">
          نکست بلاگ یک جامعه از نویسندگان، توسعه دهندگان و علاقه‌مندان به تکنولوژی است که به اشتراک گذاری دانش و تجربیات خود می‌پردازند.
          ما مقالات و آموزش‌های کاربردی در زمینه‌های مختلف تکنولوژی، برنامه نویسی و توسعه وب ارائه می‌دهیم.
        </p>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">نظرات کاربران</h2>
        <div className="space-y-4">
          <blockquote className="p-4 bg-gray-50 dark:bg-darkCard rounded-lg shadow">
            <p className="text-lg text-gray-700 dark:text-darkText">"نکست بلاگ بهترین منبع برای یادگیری و پیشرفت در زمینه برنامه نویسی است!"</p>
            <span className="mt-2 text-right text-gray-500 dark:text-darkText">- کاربر خوشحال</span>
          </blockquote>
          <blockquote className="p-4 bg-gray-50 dark:bg-darkCard rounded-lg shadow">
            <p className="text-lg text-gray-700 dark:text-darkText">"مطالب نکست بلاگ همیشه جدید و به‌روز هستند. بسیار توصیه می‌شود!"</p>
            <span className="mt-2 text-right text-gray-500 dark:text-darkText">- کاربر وفادار</span>
          </blockquote>
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">ویدیوهای آموزشی</h2>
        <div className="flex justify-center">
          <iframe 
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="آموزش نکست بلاگ"
            className="rounded-lg shadow-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">موضوعات داغ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {middleTwoPosts.map(post => (
            <BlogBox post={post} key={post._id} />
          ))}
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">آخرین نظرات کاربران</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 dark:bg-darkCard rounded-lg shadow">
            <p className="text-lg text-gray-700 dark:text-darkText">"این مقاله بسیار مفید و آموزنده بود. بسیار متشکرم!"</p>
            <span className="mt-2 text-right text-gray-500 dark:text-darkText">- کاربر جدید</span>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-darkCard rounded-lg shadow">
            <p className="text-lg text-gray-700 dark:text-darkText">"دوست دارم بیشتر از این مقالات بخوانم. عالی بود!"</p>
            <span className="mt-2 text-right text-gray-500 dark:text-darkText">- کاربر قدیمی</span>
          </div>
        </div>
      </section>

      <section className="w-full max-w-4xl bg-white dark:bg-darkCard rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">عضویت در خبرنامه</h2>
        <p className="text-lg text-gray-700 dark:text-darkText leading-relaxed mb-4">برای دریافت آخرین مقالات و اخبار، عضو خبرنامه ما شوید.</p>
        <form className="flex flex-col md:flex-row md:items-center md:space-x-4 gap-4">
          <input
            type="email"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full mb-4 md:mb-0 rounded-lg border p-3 focus:border-blue-500 focus:outline-none dark:bg-darkCard dark:text-darkText"
            required
          />
          <button className="w-full md:w-auto bg-blue-600 dark:bg-blue-900 text-white font-bold p-3 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors">
            عضویت
          </button>
        </form>
      </section>
    </div>
  );
}