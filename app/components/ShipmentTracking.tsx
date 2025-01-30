
'use client'
import React, { useState } from "react";

import { fetchShipmentStatus } from "@/lib/api";

const ShipmentTracking = () => {
  const [shipmentId, setShipmentId] = useState<string>("");
  const [shipmentStatus, setShipmentStatus] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleTrackShipment = async () => {
    setLoading(true);
    setError(""); // Clear previous error

    try {
      const data = await fetchShipmentStatus(shipmentId);
      setShipmentStatus(data);
    } catch (err: any) {
      setError("Error fetching shipment details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">
        Track Your Shipment
      </h2>

      <input
        type="text"
        className="w-full p-3 border border-gray-300 rounded-md mb-4"
        placeholder="Enter Shipment ID"
        value={shipmentId}
        onChange={(e) => setShipmentId(e.target.value)}
      />
      <button
        className="w-full p-3 bg-blue-500 text-white rounded-md"
        onClick={handleTrackShipment}
        disabled={loading}
      >
        {loading ? "Tracking..." : "Track"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {shipmentStatus && (
        <div className="mt-6">
          <h3 className="font-semibold text-xl">Shipment Status</h3>
          <p>
            <strong>Status:</strong> {shipmentStatus.status}
          </p>
          <p>
            <strong>Expected Delivery:</strong>{" "}
            {shipmentStatus.expectedDelivery}
          </p>
          <p>
            <strong>Tracking Details:</strong> {shipmentStatus.trackingDetails}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShipmentTracking;
