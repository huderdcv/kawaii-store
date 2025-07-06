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
    //BTS
    {
      description:
        '¡Sumérgete en el universo BT21 con Sips & Sweets! Cada sorbo es una explosión de ternura y sabor, acompañado por los adorables personajes creados por BTS. Perfecto para coleccionar, compartir o simplemente disfrutar con una sonrisa. ¡Una experiencia dulce que canta contigo!',
      images: ['bts-1-1.jpg', 'bts-1-2.jpg'],
      inStock: 20,
      price: 12,
      slug: 'bt21_sips_sweets',
      type: 'bts',
      tags: ['bt21', 'bebida', 'bts', 'dulce', 'coleccionable'],
      title: 'BT21 Sips & Sweets: Una Dulzura K-pop',
      themeCategory: 'kpop',
    },
    {
      description:
        '¡Snickers + BTS = una combinación poderosa! Este Snicker de almendras en colaboración con BTS no es solo un snack... es un *bite de energía explosiva con ritmo y sabor*. Ideal para recargar tu día con estilo, ¡como si un rap de RM te impulsara a seguir!',
      images: ['bts-2-1.jpg', 'bts-2-2.jpg'],
      inStock: 20,
      price: 5,
      slug: 'snicker_almendras_bts',
      type: 'bts',
      tags: ['snicker', 'almendras', 'bts', 'snack'],
      title: 'Snicker Almendras BTS Edition',
      themeCategory: 'kpop',
    },
    {
      description:
        '¡El café favorito de ARMY ha llegado! El Sweet Black Hot Brew Americano trae a cada miembro de BTS en una botella lista para acompañarte en tus mañanas. Un café suave, elegante y coleccionable que te da energía con solo mirarlo. ¡Porque cada sorbo sabe a comeback!',
      images: ['bts-3-1.jpg', 'bts-3-2.jpg'],
      inStock: 20,
      price: 14,
      slug: 'bts_hotbrew_sweet_black',
      type: 'bts',
      tags: ['café', 'americano', 'bts', 'coleccionable'],
      title: 'Hot Brew BTS: Sweet Black Americano',
      themeCategory: 'kpop',
    },
    {
      description:
        '¡Un caramelo de energía y elegancia! Este Iced Caramel Macchiato edición BTS te trae un café frío y suave con la dulzura perfecta... y lo mejor: ¡viene con la banda en la botella! Una bebida para fanáticos que sueñan en ritmo y bailan con cafeína.',
      images: ['bts-4-1.jpg', 'bts-4-2.jpg'],
      inStock: 20,
      price: 14,
      slug: 'iced_caramel_macchiato_bts',
      type: 'bts',
      tags: ['bebida', 'macchiato', 'caramel', 'bts'],
      title: 'Iced Caramel Macchiato BTS Edition',
      themeCategory: 'kpop',
    },
    {
      description:
        '¡Despierta tus mañanas con ritmo y color! Los cereales ChK en colaboración con BTS no solo son deliciosos, ¡cada caja viene con la sorpresa de un integrante en la portada! Energía, sabor y coleccionismo en un solo desayuno. ¡Empieza el día como una estrella del K-pop!',
      images: ['bts-5-1.jpg', 'bts-5-2.jpg'],
      inStock: 20,
      price: 17,
      slug: 'cereal_chk_bts',
      type: 'bts',
      tags: ['cereal', 'bts', 'colección', 'chk', 'desayuno'],
      title: 'Cereal ChK x BTS: ¡Despierta con K-pop!',
      themeCategory: 'kpop',
    },
    // SIN CATEGORIA
    {
      description:
        'Un clásico de la dulcería coreana: caramelos de arándano (blueberry) de 100 gramos con ese equilibrio entre dulzura y acidez que encanta. Perfectos para compartir o disfrutar en cualquier momento del día. ¡Dulzura frutal en versión coreana!',
      images: ['none-1-1.jpg', 'none-1-2.jpg'],
      inStock: 20,
      price: 6.9,
      slug: 'candy_blueberry_100g',
      type: 'none',
      tags: ['caramelo', 'blueberry', 'dulces coreanos'],
      title: 'Candy Blueberry Coreano 100g',
      themeCategory: 'none',
    },
    {
      description:
        '¡El famoso Choco Pie coreano! Bizcocho suave relleno de malvavisco, bañado en chocolate. Una experiencia esponjosa y reconfortante que ha conquistado corazones en todo el mundo. Ideal para un snack dulce o acompañar tu café.',
      images: ['none-2-1.jpg', 'none-2-2.jpg'],
      inStock: 20,
      price: 3.5,
      slug: 'choco_pie_coreano',
      type: 'none',
      tags: ['choco pie', 'snack', 'coreano'],
      title: 'Choco Pie Original Coreano',
      themeCategory: 'none',
    },
    {
      description:
        '¡El Taiyaki coreano ha llegado! Un dulce tradicional en forma de pez, relleno de pasta de frijol rojo o crema. Crujiente por fuera y suave por dentro, este postre es una explosión de tradición y sabor que te transporta directo a las calles de Seúl.',
      images: ['none-3-1.jpg', 'none-3-2.jpg'],
      inStock: 20,
      price: 7.9,
      slug: 'taiyaki_coreano',
      type: 'none',
      tags: ['taiyaki', 'postre', 'dulce coreano'],
      title: 'Taiyaki Coreano Tradicional',
      themeCategory: 'none',
    },
    {
      description:
        'El clásico chocolate Ghana, suave, cremoso y con el toque exacto de dulzura que lo hace irresistible. Famoso por su textura sedosa, este chocolate es uno de los favoritos en Corea del Sur. ¡Pruébalo y descubre por qué!',
      images: ['none-4-1.jpg', 'none-4-2.jpg'],
      inStock: 20,
      price: 6.5,
      slug: 'ghana_chocolate',
      type: 'none',
      tags: ['chocolate', 'ghana', 'corea'],
      title: 'Chocolate Ghana Clásico',
      themeCategory: 'none',
    },
    {
      description:
        'Los masticables Crown son pequeños pero poderosos: intensos en sabor, suaves en textura y súper adictivos. Cada bolsita viene cargada de diversión frutal al estilo coreano. ¡Ideales para tener siempre a la mano!',
      images: ['none-5-1.jpg', 'none-5-2.jpg'],
      inStock: 20,
      price: 5.5,
      slug: 'masticables_crown_corea',
      type: 'none',
      tags: ['crown', 'masticables', 'dulces', 'coreanos'],
      title: 'Masticables Crown – Sabor Coreano en Miniatura',
      themeCategory: 'none',
    },
  ],
};
