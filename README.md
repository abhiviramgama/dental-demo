# Pearl Dental Clinic (Create React App)

**Node.js:** 18 or newer.

    npm install
    npm start          # http://localhost:3000
    npm run build      # production build in build/

## Deploy on Vercel
Push to GitHub, import the repo in Vercel (Framework: Create React App). `vercel.json` sets output `build` and rewrites all routes to `index.html`, so refreshing nested routes works. No environment variables are required.

## Replace placeholder content
- Clinic name/phone/email/address/hours: `src/data/clinic.js`
- Services, dentists, testimonials, FAQs: `src/data/*.js`
- Photos: add real images to `src/assets/images/` and use them in `src/components/Sections.js` in place of the illustration placeholders.

## Connect a booking backend
The form runs in demo mode (validates but sends nothing). To go live, create an endpoint that accepts a JSON POST and set `REACT_APP_BOOKING_ENDPOINT` in Vercel env settings. Logic lives in `src/services/appointmentService.js`. Never put secret keys in frontend code.
