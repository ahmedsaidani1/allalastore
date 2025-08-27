import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, User, Mail, MapPin, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import OrderConfirmationModal from './OrderConfirmationModal';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CheckoutForm {
  fullName: string;
  email: string;
  address: string;
  phone: string;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose }) => {
  const { state, dispatch } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState<CheckoutForm>({
    fullName: '',
    email: '',
    address: '',
    phone: ''
  });

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show confirmation modal
    setShowOrderModal(true);
  };

  const handleOrderModalClose = () => {
    setShowOrderModal(false);
    dispatch({ type: 'CLEAR_CART' });
    setCheckoutForm({ fullName: '', email: '', address: '', phone: '' });
    setShowCheckout(false);
    onClose();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCheckoutForm({
      ...checkoutForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-full max-w-md bg-[#0B0C10] border-l border-gray-800 z-[70] transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-800">
            <h2 className="text-xl font-bold text-white flex items-center">
              <ShoppingBag className="h-6 w-6 mr-2 text-purple-400" />
              {showCheckout ? 'Checkout' : 'Shopping Cart'}
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto">
            {!showCheckout ? (
              // Cart Items
              <div className="p-6">
                {state.items.length === 0 ? (
                  <div className="text-center py-12">
                    <ShoppingBag className="h-16 w-16 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400 text-lg">Your cart is empty</p>
                    <p className="text-gray-500 text-sm mt-2">Add some games to get started!</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {state.items.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center space-x-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-medium text-sm">{item.title}</h3>
                          <p className="text-purple-400 font-semibold">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="text-white font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 rounded bg-gray-700 hover:bg-gray-600 text-white transition-colors duration-200"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors duration-200"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Checkout Form
              <div className="p-5">
                <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={checkoutForm.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={checkoutForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <MapPin className="h-4 w-4 inline mr-2" />
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={checkoutForm.address}
                      onChange={handleInputChange}
                      required
                      rows={1}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
                      placeholder="Enter your full address"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={checkoutForm.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-white font-semibold mb-3">Order Summary</h3>
                    <div className="space-y-2">
                      {state.items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-gray-300">{item.title} x{item.quantity}</span>
                          <span className="text-white">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="border-t border-gray-600 pt-2 mt-2">
                        <div className="flex justify-between font-semibold">
                          <span className="text-white">Total:</span>
                          <span className="text-purple-400 text-lg">${state.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="flex-1 py-3 px-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors duration-300"
                    >
                      Back to Cart
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                      Complete Order
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Footer */}
          {!showCheckout && state.items.length > 0 && (
            <div className="p-6 border-t border-gray-800 bg-gray-900/50">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold">Total:</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                  ${state.total.toFixed(2)}
                </span>
              </div>
              <button
                onClick={() => setShowCheckout(true)}
                className="w-full py-3 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal
        isOpen={showOrderModal}
        onClose={handleOrderModalClose}
        customerName={checkoutForm.fullName}
        orderTotal={state.total}
      />
    </>
  );
};

export default CartSidebar;
