import React, { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingCart, } from 'lucide-react';

import type { MenuItem, MenuData, Cart, CartItem } from '../../types/Menu/menuTypes';

export const Menu: React.FC = () => {
  const [menuData, setMenuData] = useState<MenuData | null>(null);
  const [cart, setCart] = useState<Cart>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // Fetch menu data from API
  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async (): Promise<void> => {
    try {
      // Replace with your actual API endpoint
      // const response = await fetch('YOUR_API_ENDPOINT');
      // const data: MenuData = await response.json();

      // Mock data for demonstration
      const mockData: MenuData = {
        cafeName: "Cozy Corner Cafe",
        categories: [
          {
            name: "Coffee",
            items: [
              {
                id: 1,
                name: "Espresso",
                price: 2.50,
                image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=400&h=300&fit=crop",
                description: "Rich and bold espresso shot"
              },
              {
                id: 2,
                name: "Cappuccino",
                price: 3.50,
                image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=400&h=300&fit=crop",
                description: "Creamy espresso with steamed milk"
              },
              {
                id: 3,
                name: "Latte",
                price: 4.00,
                image: "https://images.unsplash.com/photo-1561882468-9110e03e0f78?w=400&h=300&fit=crop",
                description: "Smooth and velvety coffee drink"
              },
              {
                id: 4,
                name: "Americano",
                price: 3.00,
                image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=300&fit=crop",
                description: "Classic espresso with hot water"
              }
            ]
          },
          {
            name: "Tea",
            items: [
              {
                id: 5,
                name: "Green Tea",
                price: 2.00,
                image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cda9?w=400&h=300&fit=crop",
                description: "Fresh and healthy green tea"
              },
              {
                id: 6,
                name: "Earl Grey",
                price: 2.50,
                image: "https://images.unsplash.com/photo-1597318130878-eco8156883c3?w=400&h=300&fit=crop",
                description: "Classic bergamot flavored tea"
              },
              {
                id: 7,
                name: "Chamomile",
                price: 2.50,
                image: "https://images.unsplash.com/photo-1563822249366-3effc7b8e2f1?w=400&h=300&fit=crop",
                description: "Calming herbal tea"
              }
            ]
          },
          {
            name: "Pastries",
            items: [
              {
                id: 8,
                name: "Croissant",
                price: 3.50,
                image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop",
                description: "Buttery, flaky French pastry"
              },
              {
                id: 9,
                name: "Muffin",
                price: 3.00,
                image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=300&fit=crop",
                description: "Fresh baked blueberry muffin"
              },
              {
                id: 10,
                name: "Chocolate Cake",
                price: 4.50,
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
                description: "Decadent chocolate layer cake"
              }
            ]
          },
          {
            name: "Sandwiches",
            items: [
              {
                id: 11,
                name: "Club Sandwich",
                price: 6.50,
                image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=300&fit=crop",
                description: "Triple-decker with turkey and bacon"
              },
              {
                id: 12,
                name: "Veggie Wrap",
                price: 5.50,
                image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop",
                description: "Fresh vegetables in a whole wheat wrap"
              }
            ]
          }
        ]
      };

      setMenuData(mockData);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching menu:', error);
      setLoading(false);
    }
  };

  const addToCart = (item: MenuItem): void => {
    setCart(prev => ({
      ...prev,
      [item.id]: {
        ...item,
        quantity: (prev[item.id]?.quantity || 0) + 1
      }
    }));
  };

  const removeFromCart = (itemId: number): void => {
    setCart(prev => {
      const newCart = { ...prev };
      if (newCart[itemId].quantity > 1) {
        newCart[itemId].quantity -= 1;
      } else {
        delete newCart[itemId];
      }
      return newCart;
    });
  };

  const getCartTotal = (): string => {
    return Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  };

  const getCartItemCount = (): number => {
    return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-2xl text-amber-500">Loading menu...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900 flex">
      {/* Sidebar */}
      <div className="w-72 bg-neutral-800 border-r border-neutral-700 flex flex-col">
        {/* Logo/Header */}
        <div className="p-6 border-b border-neutral-700">
          <h1 className="text-3xl font-bold text-amber-500 text-center mb-2">
            {menuData?.cafeName}
          </h1>
          <p className="text-neutral-400 text-center text-sm">Delicious menu items</p>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto py-4">
          {menuData?.categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(idx)}
              className={`w-full px-6 py-4 text-left font-semibold transition-all ${selectedCategory === idx
                ? 'bg-amber-600 text-white border-l-4 border-amber-400'
                : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'
                }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{category.name}</span>
                <span className="text-sm opacity-75">({category.items.length})</span>
              </div>
            </button>
          ))}
        </div>

        {/* Cart Summary in Sidebar */}
        {getCartItemCount() > 0 && (
          <div className="p-4 border-t border-neutral-700 bg-neutral-800">
            <div className="bg-amber-600 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} className="text-white" />
                  <span className="font-semibold text-white">Cart</span>
                </div>
                <span className="text-white text-sm">{getCartItemCount()} items</span>
              </div>
              <div className="text-2xl font-bold text-white">${getCartTotal()}</div>
              <button className="w-full mt-3 bg-white text-amber-600 py-2 rounded-lg font-bold hover:bg-neutral-100 transition-colors">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Category Header */}
        <div className="sticky top-0 bg-neutral-800 border-b border-neutral-700 z-10 px-8 py-6">
          <h2 className="text-4xl font-bold text-white mb-1">
            {menuData?.categories[selectedCategory]?.name}
          </h2>
          <p className="text-neutral-400">
            Choose from our selection of {menuData?.categories[selectedCategory]?.items.length} items
          </p>
        </div>

        {/* Items Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuData?.categories[selectedCategory]?.items.map((item) => (
              <div
                key={item.id}
                className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 border border-neutral-700"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-neutral-700">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  {cart[item.id] && (
                    <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full font-bold text-sm">
                      {cart[item.id].quantity} in cart
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-neutral-400 text-sm mb-4">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-amber-500">
                      ${item.price.toFixed(2)}
                    </span>

                    {cart[item.id] ? (
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="w-9 h-9 rounded-lg bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="font-bold text-white w-8 text-center text-lg">
                          {cart[item.id].quantity}
                        </span>
                        <button
                          onClick={() => addToCart(item)}
                          className="w-9 h-9 rounded-lg bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition-colors"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

