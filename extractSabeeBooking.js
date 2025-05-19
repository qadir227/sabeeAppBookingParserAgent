// extractSabeeBooking.js

const fs = require("fs");
const path = require("path");
const Ajv = require("ajv");
const { OpenAI } = require("openai");
const { bookingSchema } = require("./booking_schema");

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const extractionPrompt = (emailText) => `
You are an assistant trained to extract structured booking data from hotel reservation emails.

Return only valid JSON. Extract the following fields:
- reservation_type: one of "new", "modified", or "cancelled"
- res_id
- res_code
- channel_id
- property_name
- arrival_date
- departure_date
- guest_name
- guests_count (if available)
- room_type
- rate_plan (only for new bookings)
- room_name (optional)
- price (optional)
- currency (optional)
- nights (optional)
- comments (optional)
- modifications (only for modified bookings)
- cancellation_note (only for cancelled bookings)
- sabee_url
- payment_info (if any mention of credit card, virtual card, etc.)

Email text:
===
${emailText}
===
`;

async function extractBookingInfo(emailFilePath) {
  try {
    const emailText = fs.readFileSync(path.resolve(emailFilePath), "utf8");
    const prompt = extractionPrompt(emailText);

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: 0.2
    });

    const jsonData = JSON.parse(response.choices[0].message.content);

    const ajv = new Ajv();
    const validate = ajv.compile(bookingSchema);

    if (!validate(jsonData)) {
      console.error("❌ Schema validation failed:", validate.errors);
      return null;
    }

    return jsonData;
  } catch (err) {
    console.error("❌ Error extracting booking info:", err);
    return null;
  }
}

module.exports = { extractBookingInfo };
