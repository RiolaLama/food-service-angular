# Savoria Bistro Restaurant

Welcome to my Food Service Angular project! This app is designed to give users a smooth experience while browsing and ordering meals online. Built with Angular, it features a user-friendly interface where you can explore available meals, filter them by category, add them to your cart, and manage your order with ease.

## Project Structure & Design

The project is split into 4 main pages—**Home**, **About**, **Menu**, and **Cart**—each crafted with care to ensure an easy and enjoyable user experience. Everything in this app is component-based, making it modular and easy to maintain. To make sure the app looks good on any device, I’ve combined **Bootstrap** with some custom **CSS** for styling. Whether you’re on mobile or desktop, the layout adapts accordingly.

### Pages

#### Home Page

- This is the landing page, designed to give users an overview of the food service. It introduces the app and provides a friendly, welcoming interface.

#### About Page

- A simple page that explains more about the service, perhaps a bit of backstory or the mission of the food service.

#### Menu Page

- This is the heart of the app, where users can view all the available meals. Meals are displayed with details like name, price, image, and availability, making it easy to browse and filter.
- Users can filter meals by category (e.g., breakfast, lunch, dinner) to make it easier to find what they're looking for.
- Popular meals will have a **“Hot”** tag to help them stand out.
- Meals that are unavailable can’t be added to the cart, ensuring users only interact with available items.
- You can add a meal to the cart and after, a nice popup message will be displayed.
- If the same meal is already in the cart, the quantity will increase instead of duplicating the item.

#### Shopping Cart Page

- This page allows users to review their selected meals, adjust quantities, or remove items from the cart.
- Users can also clear the entire cart with one click, and the total price updates automatically based on their selections.
- Local Storage is used to persist the cart data across page reloads or browser restarts. This ensures that users don't lose their cart items if they close the page accidentally or return later.

## Technologies Used

- **Angular**
- **TypeScript**
- **Bootstrap**
- **CSS**
- **SweetAlert2**
- **Animate.css**
- **Google Fonts**
- **Font Awesome**

## Local Setup and Installation

### Prerequisites

- NodeJs
- AngularCLI
- Git
- VSCode (or any other code editor)

**1. Clone the Repository**

- Open your command line interface (CLI).
- Navigate to the directory where you want to clone the project.
- Run the following command:

```bash
git clone https://github.com/RiolaLama/food-service-angular
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the project**

```bash
ng serve
```

**4. Launch the Application**

- Navigate to http://localhost:4200/ to view the app in your browser. The app will automatically reload if you make any edits.
