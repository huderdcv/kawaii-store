import bcryptjs from 'bcryptjs';

interface SeedProduct {
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  type: ValidTypes;
  themeCategory: 'anime' | 'kpop' | 'none';
}

interface SeedUser {
  email: string;
  password: string;
  name: string;
  role: 'admin' | 'user';
}

type ValidTypes = 'pokemon' | 'dragonball' | 'bts' | 'none';

interface SeedData {
  users: SeedUser[];
  franchises: string[];
  products: SeedProduct[];
}

export const initialData: SeedData = {
  users: [
    {
      email: 'hugo@google.com',
      name: 'Hugo De La Cruz',
      password: bcryptjs.hashSync('123456'),
      role: 'admin',
    },
    {
      email: 'huder@google.com',
      name: 'Huder De La Cruz',
      password: bcryptjs.hashSync('123456'),
      role: 'user',
    },
  ],
  franchises: ['pokemon', 'dragonball', 'bts', 'none'],
  products: [
    {
      description:
        'Deliciosas papitas con envoltura especial de Pikachu. Un snack crujiente ideal para los fanáticos del anime y Pokémon, perfecto para cualquier momento del día.',
      images: ['pokemon-1-1.jpg', 'pokemon-1-2.jpg'],
      inStock: 7,
      price: 3,
      slug: 'papitas_pikachu_env',
      type: 'pokemon',
      tags: ['papitas', 'pikachu'],
      title: 'Papitas con Envoltura de Pikachu',
      themeCategory: 'anime',
    },
    {
      description:
        'Pastillas ácidas con un sabor intenso y una presentación divertida con Pikachu en la envoltura. Perfectas para llevar a todos lados y compartir con amigos.',
      images: ['pokemon-2-1.jpg', 'pokemon-2-2.jpg'],
      inStock: 7,
      price: 3,
      slug: 'pastillas_acidas_pikachu',
      type: 'pokemon',
      tags: ['pastillas', 'acidas', 'pikachu'],
      title: 'Pastillas Ácidas Pikachu',
      themeCategory: 'anime',
    },
    {
      description:
        'Refrescante soda en lata con diseño exclusivo de Charmander. Ideal para coleccionistas y fans del universo Pokémon.',
      images: ['pokemon-3-1.jpg', 'pokemon-3-2.jpg'],
      inStock: 7,
      price: 7,
      slug: 'soda_charmander_lata',
      type: 'pokemon',
      tags: ['bebida', 'soda', 'charmander'],
      title: 'Soda Lata Charmander',
      themeCategory: 'anime',
    },
    {
      description:
        'Disfruta de esta bebida gaseosa con envoltura temática de Bulbasaur. Refrescante y con diseño encantador para los amantes del anime.',
      images: ['pokemon-4-1.jpg', 'pokemon-4-2.jpg'],
      inStock: 7,
      price: 7,
      slug: 'soda_bulbasaur_lata',
      type: 'pokemon',
      tags: ['bebida', 'soda', 'bulbasaur'],
      title: 'Soda Lata Bulbasaur',
      themeCategory: 'anime',
    },
    {
      description:
        'Dulces asiáticos con chocolate y maní, presentados en pequeñas copitas con figuras adorables de Pikachu, Charmander, Squirtle y Pokeball. Un tesoro para los coleccionistas.',
      images: ['pokemon-5-1.jfif', 'pokemon-5-2.jfif'],
      inStock: 7,
      price: 1,
      slug: 'dulces_choco_figuras_pokemon',
      type: 'pokemon',
      tags: [
        'dulces',
        'chocolate',
        'figuras',
        'pikachu',
        'charmander',
        'squirtle',
      ],
      title: 'Dulces Choco con Figuras Pokémon',
      themeCategory: 'anime',
    },
    {
      description:
        'Gomitas frutales con envoltura de Pikachu. Suaves, deliciosas y perfectas para disfrutar viendo tu anime favorito.',
      images: ['pokemon-6-1.jfif', 'pokemon-6-2.jpg'],
      inStock: 7,
      price: 3,
      slug: 'gomitas_pikachu',
      type: 'pokemon',
      tags: ['gomitas', 'pikachu', 'dulces'],
      title: 'Gomitas Pikachu',
      themeCategory: 'anime',
    },
    {
      description:
        'Soda temática con diseño de Pikachu. Refrescante y única, ideal para quienes aman lo coleccionable y sabroso.',
      images: ['pokemon-7-1.jpg', 'pokemon-7-2.jpg'],
      inStock: 7,
      price: 7,
      slug: 'soda_pikachu_lata',
      type: 'pokemon',
      tags: ['bebida', 'soda', 'pikachu'],
      title: 'Soda Lata Pikachu',
      themeCategory: 'anime',
    },
    {
      description:
        'Chetos con temática de Dragon Ball, crujientes y llenos de sabor. La envoltura presenta personajes icónicos para disfrutar mientras ves tus episodios favoritos.',
      images: ['dragon-ball-1-1.jpg', 'dragon-ball-1-2.jpg'],
      inStock: 12,
      price: 2,
      slug: 'chetos_dragon_ball',
      type: 'dragonball',
      tags: ['chetos', 'dragon ball', 'snack'],
      title: 'Chetos Dragon Ball',
      themeCategory: 'anime',
    },
    {
      description:
        'Refrescante soda en lata con un vibrante diseño de Goku. Ideal para los coleccionistas y fans del universo Dragon Ball.',
      images: ['dragon-ball-2-1.jpg', 'dragon-ball-2-2.jpg'],
      inStock: 77,
      price: 7,
      slug: 'soda_goku_lata',
      type: 'dragonball',
      tags: ['bebida', 'soda', 'goku'],
      title: 'Soda Lata Goku',
      themeCategory: 'anime',
    },
    {
      description:
        'Soda en lata con diseño exclusivo de Gohan. Refrescante y llena de energía, perfecta para acompañar tus maratones de anime.',
      images: ['dragon-ball-3-1.jpg', 'dragon-ball-3-2.jpg'],
      inStock: 77,
      price: 7,
      slug: 'soda_gohan_lata',
      type: 'dragonball',
      tags: ['bebida', 'soda', 'gohan'],
      title: 'Soda Lata Gohan',
      themeCategory: 'anime',
    },
    {
      description:
        'Disfruta esta soda con diseño especial de Majin Boo en lata. Un toque dulce y poderoso para tu colección o para disfrutar en cualquier ocasión.',
      images: ['dragon-ball-4-1.jpg', 'dragon-ball-4-2.jpg'],
      inStock: 77,
      price: 7,
      slug: 'soda_boo_lata',
      type: 'dragonball',
      tags: ['bebida', 'soda', 'boo'],
      title: 'Soda Lata Majin Boo',
      themeCategory: 'anime',
    },
    {
      description:
        'Soda en lata con diseños inspirados en los trajes de Goku, Vegeta y Gohan. Un homenaje visual a los guerreros Z, ideal para los verdaderos fans.',
      images: ['dragon-ball-5-1.jpg', 'dragon-ball-5-2.jpg'],
      inStock: 77,
      price: 7,
      slug: 'soda_trajes_guerreros_z',
      type: 'dragonball',
      tags: ['bebida', 'soda', 'goku', 'vegeta', 'gohan'],
      title: 'Soda Lata Guerreros Z',
      themeCategory: 'anime',
    },
    {
      description:
        'Dulce de coco con envoltura de múltiples personajes de Dragon Ball. Un sabor tropical con un diseño que todo fan adorará.',
      images: ['dragon-ball-6-1.jpg', 'dragon-ball-6-2.jpg'],
      inStock: 11,
      price: 1,
      slug: 'dulce_coco_dragon_ball',
      type: 'dragonball',
      tags: ['dulce', 'coco', 'dragon ball'],
      title: 'Dulce de Coco Dragon Ball',
      themeCategory: 'anime',
    },
  ],
};
