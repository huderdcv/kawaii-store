'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { currencyFormat } from '@/utils';
import { CountryFlag } from '@/components/product/product-contry-of-origin/CountryFlag';
import { AddToCartOnly } from '../product-grid-item/AddToCartOnly';

interface Props {
  product: Product;
}

export const ProductGridItem2 = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="max-w-sm min-h-[400px] bg-[#FFF4DC] rounded-2xl shadow-xl overflow-hidden transition hover:scale-105 hover:shadow-2xl font-sans flex flex-col">
      <div className="relative">
        {/* Stock etiqueta */}
        <div className="absolute bottom-3 left-3 bg-[#FF7C00] text-white text-xs px-3 py-1 rounded-full shadow">
          Stock: {product.inStock}
        </div>

        {/* Imagen del producto */}
        <Link href={`/product/${product.slug}`}>
          <Image
            src={
              product.images[0].includes('cloudinary')
                ? displayImage
                : `/products/${displayImage}`
            }
            alt={product.title}
            className="w-full object-cover rounded"
            width={500}
            height={500}
            onMouseEnter={() => setDisplayImage(product.images[1])}
            onMouseLeave={() => setDisplayImage(product.images[0])}
          />
        </Link>
      </div>

      {/* Contenido debajo de la imagen */}
      <div className="p-2 flex flex-col flex-1">
        <div className="flex justify-between items-center">
          <Link
            className="hover:text-orange-500"
            href={`/product/${product.slug}`}
          >
            <h2 className="text-base font-semibold">{product.title}</h2>
          </Link>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-xl shadow">
            {currencyFormat(product.price)}
          </span>
        </div>

        <p className="text-xs text-[#1B1B1B] mt-1">
          {product.description.slice(0, 60) + '...'}
        </p>

        <div className="flex items-center justify-between text-xs text-[#1B1B1B] mt-2">
          <CountryFlag country={product.countryOfOrigin} />
        </div>

        <div className="flex items-center gap-2 mt-2">
          <div className="bg-[#FFD700] text-black px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1">
            <svg
              className="w-3 h-3 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09L5.5 12.18.5 7.41l6.564-.95L10 1l2.936 5.46 6.564.95-5 4.77 1.378 5.91z" />
            </svg>
            +{product.kawaiiPointsEarned} kPoints
          </div>
        </div>

        <div className="mt-auto">
          <AddToCartOnly product={product} />
        </div>
      </div>
    </div>
  );
};
