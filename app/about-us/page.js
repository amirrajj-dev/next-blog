'use client';
import React from 'react';
import { Heart, Users, Shield } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className='min-h-screen bg-gray-100 dark:bg-darkBg p-8'>
      <div className='max-w-4xl mx-auto bg-white dark:bg-darkCard p-8 rounded shadow'>
        <h2 className='text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400'>درباره ما</h2>
        <p className='mb-4 text-gray-700 dark:text-darkText'>
          به Next Blog خوش آمدید! ما یک پلتفرم بروز و پویا برای برنامه‌نویسان و گیمرها هستیم که تلاش می‌کند بهترین محتوا و منابع را برای علاقه‌مندان فراهم کند. هدف ما ایجاد یک جامعه قوی و هم‌بسته از حرفه‌ای‌ها و علاقه‌مندان به دنیای برنامه‌نویسی و بازی است.
        </p>
        <h3 className='text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400'><Heart className='inline text-blue-600 dark:text-blue-400' /> ماموریت ما</h3>
        <p className='mb-4 text-gray-700 dark:text-darkText'>
          ماموریت ما این است که یک منبع جامع و قابل اعتماد برای برنامه‌نویسان و گیمرها باشیم، که بتوانند از طریق آن به جدیدترین اخبار، مقالات آموزشی و بررسی‌های بازی دسترسی پیدا کنند. ما معتقدیم که آموزش و دسترسی به اطلاعات با کیفیت برای پیشرفت در این زمینه‌ها حیاتی است.
        </p>
        <h3 className='text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400'><Shield className='inline text-blue-600 dark:text-blue-400' /> ارزش‌های ما</h3>
        <ul className='list-disc list-inside mb-4 text-gray-700 dark:text-darkText'>
          <li>کیفیت: ارائه محتوای با کیفیت و به روز</li>
          <li>جامعه: ایجاد و تقویت جامعه‌ای از برنامه‌نویسان و گیمرها</li>
          <li>آموزش: فراهم کردن منابع آموزشی برای کمک به توسعه مهارت‌ها</li>
          <li>نوآوری: پیگیری جدیدترین تکنولوژی‌ها و روندهای روز</li>
        </ul>
        <h3 className='text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400'><Users className='inline text-blue-600 dark:text-blue-400' /> تیم ما</h3>
        <p className='mb-4 text-gray-700 dark:text-darkText'>
          تیم ما از یک گروه متنوع و پرانرژی از برنامه‌نویسان، گیمرها و نویسندگان تشکیل شده است که هر یک از تخصص‌های منحصر به فرد خود برای ارائه بهترین خدمات به شما استفاده می‌کنند. هدف ما این است که یک تجربه بی‌نظیر برای کاربران خود ایجاد کنیم.
        </p>
        <h3 className='text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400'>ارتباط با ما</h3>
        <p className='mb-4 text-gray-700 dark:text-darkText'>
          اگر سوالی دارید یا می‌خواهید بیشتر درباره ما بدانید، لطفاً با ما تماس بگیرید. ما همیشه خوشحالیم که از شنیدن نظرات و پیشنهادات شما مطلع شویم.
        </p>
        <h3 className='text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400'>گسترش جامعه ما</h3>
        <p className='mb-4 text-gray-700 dark:text-darkText'>
          ما در تلاشیم تا جامعه‌ای قوی و پویا ایجاد کنیم. با ما در تماس باشید و به انجمن ما بپیوندید تا با دیگر برنامه‌نویسان و گیمرها در ارتباط باشید، بحث و گفتگو کنید، و از همدیگر یاد بگیرید.
        </p>
        <h3 className='text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400'>چشم‌انداز آینده</h3>
        <p className='mb-4 text-gray-700 dark:text-darkText'>
          چشم‌انداز ما این است که در آینده‌ای نزدیک بتوانیم به یکی از برترین منابع آنلاین برای برنامه‌نویسان و گیمرها تبدیل شویم. با ارائه محتوای ارزشمند و به روز، امیدواریم که شما را در مسیر حرفه‌ای و سرگرمی همراهی کنیم.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;