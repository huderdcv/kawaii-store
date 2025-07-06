'use server';

import prisma from '@/lib/prisma';

export const getFranchises = async () => {
  try {
    const categories = await prisma.franchise.findMany({
      orderBy: {
        name: 'asc',
      },
    });

    return categories;
  } catch (error) {
    console.log(error);
    return [];
  }
};
