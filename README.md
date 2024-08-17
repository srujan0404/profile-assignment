# E-commerce React Application

This project is a simple e-commerce application built with React, Redux, and React Router. It demonstrates basic e-commerce functionality including product listing, product details, and cart management.

## Features

- Product listing page
- Product detail page
- Add to cart functionality
- Cart management (add, remove, update quantity)
- Responsive design using Tailwind CSS

## Technologies Used

- React
- Redux Toolkit
- React Router
- Tailwind CSS
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone [repository-url]
   ```

2. Navigate to the project directory:
   ```
   cd [project-name]
   ```

3. Install dependencies:
   ```
   npm install
   ```
   or
   ```
   yarn install
   ```

### Running the Application

To start the development server:
```
npm run dev
```
or
```
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

To create a production build:
```
npm run build
```
or
```
yarn build
```


## Project Structure

- `src/components`: React components
- `src/pages`: Page components
- `src/store`: Redux store and slices
- `src/assets`: Static assets like images
- `src/products.js`: Mock product data

## Key Components

- `App.jsx`: Main application component and routing
- `Layout.jsx`: Layout wrapper for all pages
- `Home.jsx`: Product listing page
- `Details.jsx`: Product detail page
- `Header.jsx`: Application header with cart icon
- `CartTab.jsx`: Side cart component
- `Product.jsx`: Individual product component

## State Management

Redux is used for state management. The main slice is:

- `cart.js`: Manages the shopping cart state

## Styling

Tailwind CSS is used for styling. The configuration can be found in `tailwind.config.js`.

## Acknowledgments

- This project was bootstrapped with Vite.
- Product images and data are for demonstration purposes only.