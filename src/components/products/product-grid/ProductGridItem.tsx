'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Product } from '@/interfaces';
import { useState } from 'react';
import { currencyFormat } from '@/utils';

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);
  console.log(product);

  return (
    <div className="rounded-md overflow-hidden fade-in transition-transform hover:scale-105">
      <Link href={`/product/${product.slug}`}>
        {/* // src={ `/products/${ displayImage }` } */}
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

      <div className="p-4 flex flex-col">
        <Link className="hover:text-blue-600" href={`/product/${product.slug}`}>
          {product.title}
        </Link>
        <span className="font-bold">{currencyFormat(product.price)}</span>
      </div>
    </div>
  );
};
