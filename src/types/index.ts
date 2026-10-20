export interface Finish {
  name: string;
  color: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'seating' | 'lighting' | 'tables' | 'textiles';
  price: number;
  rating: number;
  reviews: number;
  tint: 'sage' | 'butter' | 'sand' | 'blush' | 'sky' | 'stone';
  image: string;
  scene?: string;
  stock: number;
  badge?: string;
  blurb: string;
  finishes: Finish[];
  details: string[];
  dimensions: string;
  care: string;
  aliasIds?: string[];
}

export interface Category {
  id: string;
  name: string;
  tint: 'sage' | 'butter' | 'sand' | 'blush' | 'sky' | 'stone';
  image: string;
  count?: number;
}

export interface CartItem {
  id: string; // product id + optional finish
  productId: string;
  product: Product;
  finish?: Finish;
  quantity: number;
}
