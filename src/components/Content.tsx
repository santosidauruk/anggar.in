import React from 'react';

const Content = () => {
  return (
    <div
      className="grid gap-4 grid-cols-2 grid-rows-1"
      style={{
        height: '400px',
      }}
    >
      <div className="rounded-lg bg-purple-100 text-">
        <h3 className="px-9 py-8 text-2xl font-bold text-neutral-800 border-b border-neutral-400">
          Kalkulator Investasi Bulanan & Tahunan
        </h3>
        <form action="" className="py-9">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              Rp
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
            />
          </div>
        </form>
      </div>
      <div className="rounded-lg bg-purple-100"></div>
    </div>
  );
};

export default Content;
