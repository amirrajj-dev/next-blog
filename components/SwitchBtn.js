import { useState } from 'react';

const SwitchBtn = ({ handleDarkAndLightMode }) => {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
    handleDarkAndLightMode(!checked);
  };

  return (
    <label className="flex items-center gap-1 cursor-pointer p-1 bg-gray-100 dark:bg-gray-800 rounded-full transition duration-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-500"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={handleToggle}
      />
      <div className="relative">
        <div className="block w-8 h-4 bg-gray-300 dark:bg-gray-600 rounded-full shadow-inner"></div>
        <div
          className={`absolute left-0.5 top-0.5 w-3 h-3 bg-white dark:bg-gray-200 rounded-full shadow transform transition-transform duration-300 ${checked ? 'translate-x-4' : 'translate-x-0'}`}
        ></div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-500 dark:text-gray-200"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </label>
  );
};

export default SwitchBtn;