eShop Project

Welcome to the eShop project! This project is a type of e-commerce web application developed during my internship. The main goal of the project was to gain hands-on experience with React and TypeScript while building various features commonly found in an e-commerce platform.
Technologies Used
* React
* TypeScript
* Material UI

Features

Home Page
The eShop project includes a home page that serves as the entry point for users. It provides a brief introduction to the shop and showcases featured products or promotions.

Products Page
The products page displays a list of products available in the eShop. Users can browse through the product catalog and apply sorting and filtering options to refine their search. The implemented sorting options allow users to sort products by price, or title. The filtering options enable users to narrow down their search based on specific product attributes such as category, price, or rating.

Product Details Page
The product details page provides comprehensive information about a selected product. Users can view detailed descriptions, product images, customer reviews, and other relevant details. Additionally, this page offers options for users to add the product to their cart. 

Add to Cart Functionality
The eShop project includes an "Add to Cart" functionality, allowing users to add products to their shopping cart. The cart keeps track of selected items, their quantities, and prices. Users can review the items in their cart and update quantities.

Dummy API
Since the project focused on frontend development, a dummy API was utilized to simulate communication with a backend server. This API provided mock data for products, enabling the implementation and testing of various frontend features without requiring a fully functional backend.

Project Structure
The project follows a modular structure to ensure maintainability and scalability. Here's an overview of the main folders and files:
    * src/
    * components/: Contains reusable React components used throughout the application.
    * pages/: Contains individual pages/components for different sections of the eShop (home page, products page, product details page, etc.).
    * hooks/: Holds context providers and consumers for managing global state within the application.
    * services/: Holds all the methods to ensure data from the dummy API.
    * App.tsx: The entry point of the application, rendering the main components and routing.
    * index.tsx: The main file that renders the React application into the DOM.
    
