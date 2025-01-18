<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->
####E-Commerce Cart Application

This is a fully functional e-commerce cart application built using React.
 This app demonstrates the use of React components, props, state, event handling, and data management. 
 Users can browse products, search and sort items, add them to the cart, modify quantities, and view the total price dynamically.

 ####Features of the E-Commerce Application.
 1.This app displays a list of products with their names, prices, and "add to cart" buttons.
 2. It also adds products to the cart, increasing the quantity if the product is already in the cart.
 3. View all items in the cart with their names, prices, quantities as well as the total price.
 4. Remove products from the cart or adjust their quantities dynamically.
 5. The cart is persisted using localStorage.
 6. The app also allows the user to search products.
 7.Empty state message feature is also included.

####User Interactivity
1.Provide a seamless shopping experience with dynamic updates.
2.Display helpful messages when the cart is empty or no products match the search.

####Usage
1.Clone the repository and navigate to the project directory.
2.Install dependencies using npm install.
3.Start the development server using npm run dev.
4.Open the application in your browser at http://localhost:5173.
5.Browse products, add them to the cart, and manage quantities from the cart section.

####File Structure.
src/
├── App.jsx           # Main application component
├── data.js           # Product data file
├── components/       # Contains reusable React components
│   ├── ProductList.jsx  # Displays the list of products
│   ├── Cart.jsx         # Handles cart functionality
├── assets/           # Contains static assets (e.g., logo)
│   ├── Shopping Cart.jpeg  # Application logo
├── index.css         # Global styles
├── main.jsx          # Entry point for the React app


####Acknowledgments
This project was inspired by modern e-commerce applications and designed to demonstrate key React concepts. Special thanks to Mercy Nzau (Technical Mentor)
for her continued guidance throughtout.