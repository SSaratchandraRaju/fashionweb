import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic White T-Shirt',
    price: 299.99,
    description: 'A timeless classic white t-shirt made from 100% organic cotton. Perfect for any casual occasion.',
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500',
    ],
    category: 'T-Shirts',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 2,
    name: 'Slim Fit Jeans',
    price: 799.99,
    description: 'Modern slim fit jeans in dark wash denim. Features a comfortable stretch fabric.',
    images: [
      'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      'https://images.unsplash.com/photo-1475178626620-a4d074967452?w=500',
    ],
    category: 'Jeans',
    sizes: ['28', '30', '32', '34', '36'],
  },
  {
    id: 3,
    name: 'Leather Jacket',
    price: 1299.99,
    description: 'Classic leather jacket with a modern twist. Made from premium leather with a comfortable fit.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      'https://images.unsplash.com/photo-1509539662397-116cb90542f1?w=500',
    ],
    category: 'Jackets',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 4,
    name: 'Summer Dress',
    price: 899.99,
    description: 'Light and breezy summer dress with floral pattern. Perfect for warm days.',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500',
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500',
    ],
    category: 'Dresses',
    sizes: ['XS', 'S', 'M', 'L'],
  },
];

export const categories = [...new Set(products.map(product => product.category))];