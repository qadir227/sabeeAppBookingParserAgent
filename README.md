# SabeeApp Booking Parser Agent

This project uses OpenAI GPT-4 to extract structured booking information from SabeeApp hotel reservation emails.  
It supports **new**, **modified**, and **cancelled** reservation emails by letting the LLM intelligently parse and classify the email content.

---

## Features

- Reads SabeeApp booking emails from text files.
- Uses GPT-4 with a structured JSON schema to extract key booking details.
- Supports multiple reservation types:
  - New bookings
  - Modified bookings
  - Cancelled bookings
- Validates extracted data against a JSON schema using `ajv`.
- Simple Node.js interface.

---

## Prerequisites

- Node.js (v16+ recommended)
- An OpenAI API key with GPT-4 access

---

## Installation

1. Clone the repository:

git clone https://github.com/qadir227/sabeeAppBookingParserAgent.git
```
cd sabeeAppBookingParserAgent
npm install
```

2. Replace your OPENAI API KEY in .env file:

```OPENAI_API_KEY="YOUR_API_KEY"```

## File Structure

```extractSabeeBooking.js``` — Main script that reads email text file and extracts booking info using OpenAI.
```booking_schema.js``` — JSON schema defining the expected structure of extracted booking data.
```sabeeapp_booking_email.txt``` — Sample email text file for testing.
```testExtract.js``` — Example script demonstrating usage.

## Example Output

```
{
  "reservation_type": "new",
  "res_id": "32638XXX",
  "res_code": "62HXXXN",
  "channel_id": "22013XXXX2",
  "property_name": "Your Hotel",
  "arrival_date": "2025-07-02",
  "departure_date": "2025-07-05",
  "guest_name": "John Doe",
  "guests_count": 4,
  "room_type": "City View Apartment",
  "rate_plan": "Master prices",
  "room_name": "Airhome2B - Charming City View Apartment",
  "price": 2460.24,
  "currency": "CHF",
  "nights": 3,
  "comments": "Special requests: 2 Queen Beds and 1 Twin Sofa Bed Non-Smoking",
  "sabee_url": "https://chm.sabeeapp.com/reservations?resid=32638XXX",
  "payment_info": "Expedia Virtual Card will be activated from the day of Check-in. Payment collected by: Expedia"
}
```
