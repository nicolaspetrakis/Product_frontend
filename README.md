# Product Management Frontend

A React TypeScript application for managing products. This frontend interfaces with a Java backend API to display and create products.

## Features

- View all products in a clean, modern interface
- Add new products with real-time updates
- Error handling and loading states
- Responsive design with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Axios for API calls
- Vite for build tooling

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Java backend running on port 8081

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Start the development server:
```bash
npm run dev
```

## API Endpoints

The application connects to two main endpoints:

- GET `/api/products` - Retrieves all products
- POST `/api/products` - Creates a new product

## Environment

The backend API is expected to run on `http://localhost:8081`. If your backend runs on a different port, update the `API_BASE_URL` in `src/services/api.ts`.
