import React from 'react';
import { CheckCircle, X } from 'lucide-react';

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  customerName: string;
  orderTotal: number;
}

const OrderConfirmationModal: React.FC<OrderConfirmationModalProps> = ({
  isOpen,
  onClose,
  customerName,
  orderTotal
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[80] flex items-center justify-center p-4">
        {/* Modal */}
        <div className="bg-[#0B0C10] border border-gray-700 rounded-2xl p-8 max-w-md w-full mx-4 transform animate-slide-in-up">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Success Icon */}
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Order Confirmed!</h2>
            <p className="text-gray-300">Thank you for your purchase, {customerName}!</p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-800/50 rounded-lg p-4 mb-6 border border-gray-700">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">Order Total:</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] bg-clip-text text-transparent">
                ${orderTotal.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="text-center mb-6">
            <p className="text-gray-300 leading-relaxed">
              Your order has been successfully submitted! Our team will contact you soon with further details about your purchase and delivery information.
            </p>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="w-full py-3 bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmationModal;