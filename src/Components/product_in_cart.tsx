import React from 'react';

type CardProductProps = {
  id: string;
  image: string;
  title: string;
  price: number | string;
};

const product_in_cart: React.FC<CardProductProps> = ({ image, title, price }) => {
  return (
   
      <div className="rounded-2xl shadow-md overflow-hidden bg-white" style={{ cursor: "pointer" }}>
        <img src={image} alt={title} className="w-full h-[150px] object-contain mx-auto" />
        <div className="p-3">
          <p className="text-sm text-gray-600 leading-tight line-clamp-2">
            {title}
          </p>
          <p className="text-base font-bold text-black">${price}</p>
        </div>
      </div>
   
  );
};

export default product_in_cart;
