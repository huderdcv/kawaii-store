export const revalidate = 60; // 60 segundos

import { getPaginatedProductsByFranchise } from '@/actions';
import { Pagination, ProductGrid, Title } from '@/components';

import { redirect } from 'next/navigation';

interface Props {
  params: {
    franchise: string;
  };
  searchParams: {
    page?: string;
  };
}

export default async function ThemeCategoryByPage({
  params,
  searchParams,
}: Props) {
  const { franchise } = params;
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  const { products, currentPage, totalPages } =
    await getPaginatedProductsByFranchise({
      page,
      franchise: franchise,
    });

  if (products.length === 0) {
    redirect(`/franchise/${franchise}`);
  }

  const labels: Record<string, string> = {
    pokemon: 'de Pokemon',
    dragonball: 'de Dragon Ball',
    bts: 'de BTS',
    none: 'sin ninguna Franquicia',
  };

  return (
    <>
      <Title
        title={`Artículos ${labels[franchise]}`}
        subtitle="Todos los productos"
        className="mb-2"
      />

      <ProductGrid products={products} />

      <Pagination totalPages={totalPages} />
    </>
  );
}
