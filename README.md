# 🌐 React Router Practice Project

This is a simple front-end project built with React to practice and demonstrate the fundamentals of **client-side routing**. It simulates a basic multi-page website with a persistent navigation bar and four distinct pages: Home, About, Contact, and Courses.

---

## 📸 App Preview

<img width="1916" height="909" alt="image" src="https://github.com/user-attachments/assets/34970853-68c5-45b1-bdb5-2c05b00dba29" />

---

## ✨ Features

* **Static Navigation Bar:** A header/navbar that stays the same on every page.
* **Four Unique Pages:**
    * `/` (Home Page)
    * `/about` (About Page)
    * `/contact` (Contact Page)
    * `/courses` (Courses Page)
* **Seamless Navigation:** Clicking the navigation links switches the page content instantly without a full browser reload.

---

## 🎯 Key Learning: Implementing `react-router-dom`

The primary goal of this project was to learn the basics of the **`react-router-dom`** library.

The key concepts I implemented are:

1.  **`BrowserRouter`:** Wrapping the entire `<App>` component to enable routing capabilities throughout the application.
2.  **`Routes` and `Route`:** Using the `<Routes>` component to define a container for all possible routes, and using individual `<Route>` components to map a specific URL path (e.g., `path="/about"`) to its corresponding React component (e.g., `element={<About />}`).
3.  **`Link` Component:** Replacing standard `<a>` tags with the `<Link to="...">` component. This is the key to client-side routing, as it prevents the browser's default behavior of sending a new request to the server and instead just updates the UI.
4.  **Shared Layout:** Structuring the application so that the `<Navbar>` component is rendered outside of the `<Routes>`, allowing it to be a persistent, shared component across all pages.



---

## 💻 Technologies Used

* **React:** For building the user interface.
* **Vite:** As the front-end build tool.
* **`react-router-dom`:** The library used for all routing.
* **CSS:** For basic styling of the pages and navbar.
