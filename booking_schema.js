// booking_schema.js
const bookingSchema = {
    type: "object",
    required: ["reservation_type", "res_id", "res_code", "channel_id", "property_name", "arrival_date", "departure_date", "guest_name"],
    properties: {
      reservation_type: { type: "string", enum: ["new", "modified", "cancelled"] },
      res_id: { type: "string" },
      res_code: { type: "string" },
      channel_id: { type: "string" },
      property_name: { type: "string" },
      arrival_date: { type: "string" },  // you can add "format": "date" if you want
      departure_date: { type: "string" },
      guest_name: { type: "string" },
      guests_count: { type: "integer", nullable: true },
      room_type: { type: "string" },
      rate_plan: { type: "string", nullable: true },
      room_name: { type: "string", nullable: true },
      price: { type: "string", nullable: true },
      currency: { type: "string", nullable: true },
      nights: { type: "integer", nullable: true },
      comments: { type: "string", nullable: true },
      modifications: { type: "string", nullable: true },
      cancellation_note: { type: "string", nullable: true },
      sabee_url: { type: "string", nullable: true },
      payment_info: { type: "string", nullable: true },
    },
    additionalProperties: false
  };
  
  module.exports = { bookingSchema };
  