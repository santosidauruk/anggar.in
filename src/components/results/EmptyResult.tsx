import React from 'react';
import Image from 'next/image';

const EmptyResult = () => {
  return (
    <div className="p-5 flex justify-center items-center flex-col">
      <div className="relative w-[144px] h-[157px]">
        <Image src={'/empty-calc-form.png'} alt={'empty-form'} fill />
      </div>
      <p className="text-purple-400 text-sm md:text-xl text-center mt-3 max-w-[250px]">
        Lengkapi form disamping untuk mendapatkan hasil
      </p>
    </div>
  );
};

export default EmptyResult;
