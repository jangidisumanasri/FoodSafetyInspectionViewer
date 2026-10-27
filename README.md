# FoodSafe Inspection Viewer

A responsive food safety inspection dashboard built with HTML, CSS, vanilla JavaScript and Express.

## Features

- Modern white-and-emerald dashboard with inspection summary cards and recent records
- Add inspections with business, location, inspector, score and notes
- Search inspection records and filter by pass/needs-attention status
- Delete inspection records
- Food safety guide with an interactive daily checklist
- Responsive layouts for desktop, tablet and mobile
- Existing API routes retained: `GET /api/inspections`, `GET /api/summary`, `POST /api/inspections`, and `DELETE /api/inspections/:id`

## Requirements

- Node.js 18 or later
- npm

## Run locally

1. Extract the ZIP file.
2. Open a terminal in the `FoodSafetyInspectionViewer` folder.
3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Open **http://localhost:3000** in your browser.

## Notes

The sample inspection records are held in memory by the Express server. New and deleted records will reset to the sample data when the server restarts. This keeps the original storage behavior unchanged.
