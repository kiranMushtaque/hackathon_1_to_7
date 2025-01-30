
// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { useCart } from "../context/CartContext";
// import "animate.css";

// const OrderConfirmation: React.FC = () => {
//   const { cart } = useCart();
//   const router = useRouter();

//   // Sample Shipment ID (this should be dynamic, possibly from API or context)
//   const shipmentId = "1234567890"; // This would be dynamic based on your data

//   // If the cart is empty, show an empty cart message
//   if (cart.length === 0) {
//     return (
//       <div className="flex justify-center items-center h-screen bg-gray-50">
//         <div className="max-w-lg mx-auto p-12 bg-white shadow-xl rounded-xl animate__animated animate__fadeInDown">
//           <div className="text-center">
//             <h2 className="text-3xl font-semibold text-[#FF9F0D] mb-6">
//               Your Cart is Empty
//             </h2>
//             <p className="text-lg text-gray-600 mb-6">
//               It looks like your cart is currently empty. Browse our products
//               and add some to your cart to start shopping.
//             </p>
//             <button
//               onClick={() => router.push("/shop")}
//               className="w-full py-3 px-6 bg-[#FF9F0D] text-white font-semibold text-lg rounded-md hover:bg-orange-700 transition-colors duration-300"
//               aria-label="Start Shopping"
//             >
//               Start Shopping
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto mt-12 p-8 bg-white shadow-xl rounded-lg animate__animated animate__fadeInUp">
//       <h1 className="text-3xl font-bold text-[#FF9F0D] mb-6 animate__animated animate__fadeInDown animate__delay-1s">
//         Thank You for Your Order!
//       </h1>
//       <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeInDown animate__delay-1s">
//         Your order has been successfully placed. You will receive a confirmation
//         email shortly with all the details.
//       </p>

//       {/* Order Summary */}
//       <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeInUp animate__delay-2s">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">
//           Order Summary
//         </h2>
//         <ul className="divide-y divide-gray-200">
//           {cart.map((item, index) => (
//             <li key={index} className="py-4 flex items-center space-x-4">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="w-20 h-20 object-cover rounded-md"
//                 aria-hidden="true"
//               />
//               <div className="flex-1">
//                 <p className="text-lg font-medium text-gray-800">{item.name}</p>
//                 <p className="text-sm text-gray-500">
//                   {item.quantity} x ${item.price.toFixed(2)}
//                 </p>
//               </div>
//               <p className="text-lg font-semibold text-gray-800">
//                 ${(item.price * item.quantity).toFixed(2)}
//               </p>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {/* Price Breakdown */}
//       <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
//         <div className="flex justify-between text-gray-700 mb-2">
//           <span className="font-medium">Subtotal:</span>
//           <span className="font-semibold text-gray-800">
//             $
//             {cart
//               .reduce(
//                 (sum, product) => sum + product.price * product.quantity,
//                 0
//               )
//               .toFixed(2)}
//           </span>
//         </div>
//         <div className="flex justify-between text-gray-700 mb-2">
//           <span className="font-medium">Shipping:</span>
//           <span className="font-semibold text-gray-800">$0.00</span>
//         </div>
//         <div className="flex justify-between text-gray-700 mb-2">
//           <span className="font-medium">Tax:</span>
//           <span className="font-semibold text-gray-800">$10.00</span>
//         </div>
//         <div className="flex justify-between text-lg font-bold text-gray-800 mt-4">
//           <span>Total:</span>
//           <span>
//             $
//             {(
//               cart.reduce(
//                 (sum, product) => sum + product.price * product.quantity,
//                 0
//               ) + 10
//             ).toFixed(2)}
//           </span>
//         </div>
//       </div>

//       {/* Shipment ID and Tracking */}
//       <div className="mt-8">
//         <h2 className="text-xl font-semibold text-gray-800 mb-4">
//           Shipment Details
//         </h2>
//         <p className="text-lg text-gray-600">
//           Your order is being processed and will be shipped shortly. Track your
//           shipment using the ID below:
//         </p>
//         <div className="mt-4">
//           <span className="text-lg text-orange-600 font-semibold">
//             Shipment ID: {shipmentId}
//           </span>
//         </div>
//         <p className="text-gray-500 mt-2">
//           You can track your order anytime using this ID.
//         </p>
//       </div>

//       {/* Next Steps */}
//       <div className="mt-8 text-center">
//         <button
//           onClick={() => router.push("/shop")}
//           className="w-full py-3 px-6 bg-[#FF9F0D] text-white font-semibold text-lg rounded-md hover:bg-orange-700 transition-colors duration-300"
//           aria-label="Continue Shopping"
//         >
//           Continue Shopping
//         </button>
//       </div>
//     </div>
//   );
// };

// export default OrderConfirmation;





























"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/CartContext";
import "animate.css";

const OrderConfirmation: React.FC = () => {
  const { cart } = useCart();
  const router = useRouter();

  // Sample Shipment ID (this should be dynamic, possibly from API or context)
  const shipmentId = "1234567890"; // This would be dynamic based on your data

  // If the cart is empty, show an empty cart message
  if (cart.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="max-w-lg mx-auto p-12 bg-white shadow-xl rounded-xl animate__animated animate__fadeInDown">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-[#FF9F0D] mb-6">
              Your Cart is Empty
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              It looks like your cart is currently empty. Browse our products
              and add some to your cart to start shopping.
            </p>
            <button
              onClick={() => router.push("/shop")}
              className="w-full py-3 px-6 bg-[#FF9F0D] text-white font-semibold text-lg rounded-md hover:bg-orange-700 transition-colors duration-300"
              aria-label="Start Shopping"
            >
              Start Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white shadow-xl rounded-lg animate__animated animate__fadeInUp">
      <h1 className="text-3xl font-bold text-[#FF9F0D] mb-6 animate__animated animate__fadeInDown animate__delay-1s">
        Thank You for Your Order!
      </h1>
      <p className="text-lg text-gray-600 mb-6 animate__animated animate__fadeInDown animate__delay-1s">
        Your order has been successfully placed. You will receive a confirmation
        email shortly with all the details.
      </p>

      {/* Order Summary */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 animate__animated animate__fadeInUp animate__delay-2s">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Order Summary
        </h2>
        <ul className="divide-y divide-gray-200">
          {cart.map((item, index) => (
            <li key={index} className="py-4 flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md"
                aria-hidden="true"
              />
              <div className="flex-1">
                <p className="text-lg font-medium text-gray-800">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.quantity} x ${item.price.toFixed(2)}
                </p>
              </div>
              <p className="text-lg font-semibold text-gray-800">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Breakdown */}
      <div className="bg-gray-50 p-6 rounded-lg shadow-md mt-6">
        <div className="flex justify-between text-gray-700 mb-2">
          <span className="font-medium">Subtotal:</span>
          <span className="font-semibold text-gray-800">
            $$
            {cart
              .reduce(
                (sum, product) => sum + product.price * product.quantity,
                0
              )
              .toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span className="font-medium">Shipping:</span>
          <span className="font-semibold text-gray-800">$0.00</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span className="font-medium">Tax:</span>
          <span className="font-semibold text-gray-800">$10.00</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-800 mt-4">
          <span>Total:</span>
          <span>
            $$
            {(
              cart.reduce(
                (sum, product) => sum + product.price * product.quantity,
                0
              ) + 10
            ).toFixed(2)}
          </span>
        </div>
      </div>

      {/* Shipment ID and Tracking */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Shipment Details
        </h2>
        <p className="text-lg text-gray-600">
          Your order is being processed and will be shipped shortly. Track your
          shipment using the ID below:
        </p>
        <div className="mt-4">
          <span
            className="text-lg text-orange-600 font-semibold cursor-pointer"
            onClick={() => router.push(`/track?shipmentId=${shipmentId}`)} // This navigates to the tracking page with the shipment ID
          >
            Shipment ID: {shipmentId}
          </span>
        </div>
        <p className="text-gray-500 mt-2">
          You can track your order anytime using this ID.
        </p>
      </div>

      {/* Next Steps */}
      <div className="mt-8 text-center">
        <button
          onClick={() => router.push("/shop")}
          className="w-full py-3 px-6 bg-[#FF9F0D] text-white font-semibold text-lg rounded-md hover:bg-orange-700 transition-colors duration-300"
          aria-label="Continue Shopping"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
