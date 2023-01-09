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
        <form action="" className="p-9">
          <div className="relative">
            {/* TODO:
            - Add dynamic filled width if the content inside prefix changes
            - Fix focus state on input */}
            <div className="absolute inset-y-0 left-0 flex items-center p-3 pointer-events-none font-bold border-purple-300 bg-neutral-200 border border-r rounded-l-lg">
              Rp
            </div>
            <input
              type="text"
              id="email-address-icon"
              className="border border-purple-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-14 pr-14 p-2.5"
              placeholder="name@flowbite.com"
            />
            <div className="absolute inset-y-0 right-0 flex items-center p-3 pointer-events-none font-bold border-purple-300 bg-neutral-200 border border-l rounded-r-lg">
              %/Tahun
            </div>
          </div>
        </form>
      </div>
      <div className="rounded-lg bg-purple-100"></div>
    </div>
  );
};

export default Content;
