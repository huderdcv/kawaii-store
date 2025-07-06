import prisma from '../lib/prisma';
import { initialData } from './seed';
import { countries } from './seed-countries';

async function main() {
  // 1. Borrar registros previos
  // await Promise.all( [

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();

  await prisma.userAddress.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.franchise.deleteMany();
  // ]);

  const { franchises, products, users } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  await prisma.country.createMany({
    data: countries,
  });

  //  Categorias
  // {
  //   name: 'Shirt'
  // }
  const franchisesData = franchises.map((name) => ({ name }));

  await prisma.franchise.createMany({
    data: franchisesData,
  });

  const franchisesDB = await prisma.franchise.findMany();

  const franchisesMap = franchisesDB.reduce((map, franchise) => {
    map[franchise.name.toLowerCase()] = franchise.id;
    return map;
  }, {} as Record<string, string>); //<string=shirt, string=categoryID>

  // Productos

  products.forEach(async (product) => {
    const { type, images, ...rest } = product;

    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        franchiseId: franchisesMap[type],
      },
    });

    // Images
    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log('Seed ejecutado correctamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
