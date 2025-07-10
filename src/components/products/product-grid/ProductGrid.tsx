import { Product } from '@/interfaces';
import { ProductGridItem } from './ProductGridItem';
import { ProductGridItem2 } from './ProductGridItem2';

interface Props {
  products: Product[];
}

export const ProductGrid = ({ products }: Props) => {
  return (
    <div className="grid justify-center [grid-template-columns:repeat(auto-fit,minmax(250px,250px))] gap-6 mb-10 content-start">
      {products.map((product) => (
        <ProductGridItem2 key={product.slug} product={product} />
      ))}
    </div>
  );
};
