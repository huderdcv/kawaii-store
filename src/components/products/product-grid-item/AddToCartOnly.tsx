import { CartProduct, Product } from '@/interfaces';
import { useCartStore } from '@/store';
import React from 'react';

interface Props {
  product: Product;
}

export const AddToCartOnly = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductTocart);

  const onAddToCartButton = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      image: product.images[0],
      price: product.price,
      quantity: 1,
      slug: product.slug,
      title: product.title,
    };
    addProductToCart(cartProduct);
  };

  return (
    <button
      onClick={onAddToCartButton}
      className={`mt-3 w-full  text-white font-medium py-1.5 rounded-xl shadow-sm transition flex justify-center items-center gap-2 text-sm ${
        !product.inStock ? 'btn-disabled' : 'bg-[#FF7C00] hover:bg-[#FFD700]'
      }`}
      disabled={product.inStock === 0}
    >
      Agregar al carrito
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l1.2 6M17 13l-1.2 6M6 19a1 1 0 100 2 1 1 0 000-2zm12 0a1 1 0 100 2 1 1 0 000-2z"
        />
      </svg>
    </button>
  );
};
