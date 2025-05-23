import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cart';
import { TrashIcon } from '@heroicons/react/24/outline';

export default function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Your cart is empty</h2>
        <p className="mt-4 text-gray-600">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Link
          to="/shop"
          className="mt-8 inline-block bg-primary-600 text-white py-3 px-8 rounded-md hover:bg-primary-700"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.size}`}
              className="flex items-center py-6 border-b"
            >
              <img
                src={item.product.images[0]}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-medium text-gray-900">
                  {item.product.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600">Size: {item.size}</p>
                <div className="mt-2 flex items-center">
                  <select
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.product.id, parseInt(e.target.value))
                    }
                    className="rounded-md border-gray-300 py-1.5"
                  >
                    {[1, 2, 3, 4, 5].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => removeFromCart(item.product.id)}
                    className="ml-4 text-red-600 hover:text-red-800"
                  >
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>
              <div className="ml-4">
                <p className="text-lg font-medium text-gray-900">
                  ₹{(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="md:col-span-1">
          <div className="bg-gray-50 rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
            <div className="mt-6 space-y-4">
              <div className="flex justify-between">
                <p className="text-gray-600">Subtotal</p>
                <p className="text-gray-900">₹{total().toFixed(2)}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-600">Shipping</p>
                <p className="text-gray-900">Free</p>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <p className="text-lg font-medium text-gray-900">Total</p>
                  <p className="text-lg font-medium text-gray-900">
                    ₹{total().toFixed(2)}
                  </p>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-6 w-full bg-primary-600 text-white py-3 px-8 rounded-md hover:bg-primary-700 text-center block"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}