"use client";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const TrackPageContent = () => {
  const searchParams = useSearchParams();
  const shipmentId = searchParams.get("shipmentId");

  const [trackingInfo, setTrackingInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!shipmentId) return;

    const fetchTrackingInfo = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/track-shipment?shipmentId=${shipmentId}`);
        const data = await res.json();
        setTrackingInfo(data);
      } catch (error) {
        console.error("Error fetching tracking info", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrackingInfo();
  }, [shipmentId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl overflow-hidden p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900 text-center">
          Track Your Shipment
        </h1>

        {loading ? (
          <div className="flex justify-center items-center space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]" />
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]" />
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce" />
          </div>
        ) : !trackingInfo ? (
          <div className="text-center text-gray-500">
            No tracking info available.
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">Shipment ID:</span> {shipmentId}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Status:</span>{" "}
              {trackingInfo.status}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Expected Delivery:</span>{" "}
              {trackingInfo.expectedDelivery}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const TrackPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackPageContent />
    </Suspense>
  );
};

export default TrackPage;
