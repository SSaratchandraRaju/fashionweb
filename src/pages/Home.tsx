import { Link } from 'react-router-dom';
import { products } from '../data/products';

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            className="w-full h-[600px] object-cover"
            src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600"
            alt="Fashion Banner"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Discover Your Style
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Explore our latest collection of trendsetting fashion pieces that define who you are.
          </p>
          <div className="mt-10">
            <Link
              to="/shop"
              className="inline-block bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 rounded-md"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-gray-900 to-transparent">
                  <h3 className="text-white text-xl font-semibold">{product.name}</h3>
                  <p className="text-white">₹{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['T-Shirts', 'Jeans', 'Dresses', 'Jackets'].map((category) => (
              <Link
                key={category}
                to={`/shop?category=${category}`}
                className="relative group overflow-hidden rounded-lg"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={products.find(p => p.category === category)?.images[0]}
                    alt={category}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}