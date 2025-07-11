'use server';

import prisma from '@/lib/prisma';
import { ThemeCategory } from '@prisma/client';

interface PaginationOptions {
  page?: number;
  take?: number;
  themeCategory?: ThemeCategory;
}

export const getPaginatedProductsByThemeCategory = async ({
  page = 1,
  take = 12,
  themeCategory,
}: PaginationOptions) => {
  if (isNaN(Number(page))) page = 1;
  if (page < 1) page = 1;

  try {
    // 1. Obtener los productos
    const products = await prisma.product.findMany({
      take: take,
      skip: (page - 1) * take,
      include: {
        ProductImage: {
          take: 2,
          select: {
            url: true,
          },
        },
      },
      //! Por género
      where: {
        themeCategory: themeCategory,
      },
    });

    // 2. Obtener el total de páginas
    // todo:
    const totalCount = await prisma.product.count({
      where: {
        themeCategory: themeCategory,
      },
    });

    const totalPages = Math.ceil(totalCount / take);

    return {
      currentPage: page,
      totalPages: totalPages,
      products: products.map((product) => ({
        ...product,
        images: product.ProductImage.map((image) => image.url),
      })),
    };
  } catch (error) {
    throw new Error('No se pudo cargar los productos');
  }
};
