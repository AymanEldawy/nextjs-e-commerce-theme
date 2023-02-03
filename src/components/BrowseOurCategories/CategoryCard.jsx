import React from 'react';
import Image from 'next/image';
export const CategoryCard = ({ category }) => {
  return (
    <div className="flex flex-col gap-1 justify-center items-center">
      <figure className="overflow-hidden p-2">
        <Image
          className="rounded-full"
          src={category?.img}
          alt={category?.name}
          height={210}
          width={210}
        />
      </figure>
      <h4 className='font-medium text-lg'>{category.name}</h4>
      <p className='font-light text-md'>30 Products</p>
    </div>
  );
};