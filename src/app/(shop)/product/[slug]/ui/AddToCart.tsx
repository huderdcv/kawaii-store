'use client';

import { useState } from 'react';

import { QuantitySelector } from '@/components';
import type { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState(false);

  const addToCart = () => {
    setPosted(true);

    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
    };

    addProductToCart(cartProduct);
    setPosted(false);
    setQuantity(1);
  };

  return (
    <>
      {/* Selector de Cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChanged={setQuantity} />

      {/* Button */}
      <button
        onClick={addToCart}
        className={`my-5 ${product.inStock ? 'btn-primary' : 'btn-disabled'}`}
        disabled={!product.inStock}
      >
        Agregar al carrito
      </button>
    </>
  );
};
