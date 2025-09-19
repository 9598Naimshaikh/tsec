import React from 'react';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-4 z-100 left-1/2 -translate-x-1/2 bg-neutral-300 rounded-full shadow-lg  max-w-sm w-full mx-auto">
      <div className="flex justify-around items-center">
        <div className="flex flex-col items-center  text-neutral-950">
          {/* Photos Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs mt-1">Photos</span>
        </div>

        <div className="flex flex-col items-center p-2 text-neutral-950 cursor-pointer">
          {/* Albums Icon */}
          <h1 className='text-4xl'>+</h1>
          <span className="text-xs mt-1">Upload</span>
        </div>

        <div className="flex flex-col items-center p-2 text-neutral-950">
          {/* Assistant Icon (Active) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-xs mt-1">Assistant</span>
        </div>

        
      </div>
    </nav>
  );
};

export default BottomNavbar;