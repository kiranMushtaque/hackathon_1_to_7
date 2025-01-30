

"use client";
import React, { useState, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  shipmentId: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, shipmentId }) => {
  const [shipmentStatus, setShipmentStatus] = useState<string>("");
  const [estimatedDelivery, setEstimatedDelivery] = useState<string>("");

  useEffect(() => {
    if (shipmentId) {
      setShipmentStatus("In Transit");
      setEstimatedDelivery("2025-02-05");
    }
  }, [shipmentId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg mx-auto">
        <h2 className="text-2xl font-bold text-[#FF9F0D] mb-4">
          Shipment Details
        </h2>
        <p className="text-lg mb-4">Your Shipment ID is:</p>
        <p className="text-lg font-semibold text-orange-600 mb-4">
          {shipmentId}
        </p>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Status:</p>
          <p className="text-lg font-semibold">{shipmentStatus}</p>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-500">Estimated Delivery:</p>
          <p className="text-lg font-semibold">{estimatedDelivery}</p>
        </div>

        <div className="flex justify-center space-x-4">
          {/* Track Shipment Button - dynamic URL using Shippo */}
          <button
            onClick={() =>
              window.open(
                `https://www.shippo.com/track/${shipmentId}`,
                "_blank"
              )
            }
            className="py-2 px-6 bg-[#FF9F0D] text-white rounded-md hover:bg-orange-700"
          >
            Track Shipment
          </button>

          <button
            onClick={onClose}
            className="py-2 px-6 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
