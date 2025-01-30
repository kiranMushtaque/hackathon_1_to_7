// /app/api/track-shipment/route.ts

export async function GET(request: Request) {
  const url = new URL(request.url);
  const shipmentId = url.searchParams.get("shipmentId");

  console.log("Received shipmentId:", shipmentId); // Add this log to check if the ID is being received

  if (!shipmentId) {
    return new Response(JSON.stringify({ error: "Shipment ID is required" }), {
      status: 400,
    });
  }

  // Mock response for tracking information (replace with actual logic)
  const trackingInfo = {
    shipmentId: shipmentId,
    status: "In Transit",
    expectedDelivery: "2025-02-05",
  };

  return new Response(JSON.stringify(trackingInfo), { status: 200 });
}
