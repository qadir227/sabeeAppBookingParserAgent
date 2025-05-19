// testExtract.js

const { extractBookingInfo } = require("./extractSabeeBooking");

(async () => {
  const result = await extractBookingInfo("sabeeapp_booking_email.txt");
  if (result) {
    console.log("✅ Extracted Booking Info:", result);
  } else {
    console.log("❌ Failed to extract or validate booking info.");
  }
})();
