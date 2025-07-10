import { AvailabilityType } from '@prisma/client';

export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  slug: string;
  tags: string[];
  title: string;
  kawaiiPointsRequired: number;
  kawaiiPointsEarned: number;
  countryOfOrigin: CountryOfOrigin;
  productType: ProductType;
  availabilityType: AvailabilityType;
  themeCategory: ThemeCategory;

  //todo: type: Type;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}

export type CountryOfOrigin = 'korea' | 'japan' | 'china' | 'other';
export type ProductType = 'individual' | 'pack';
export type availabilityType = 'general' | 'exclusive';
export type ThemeCategory = 'anime' | 'kpop' | 'none';
