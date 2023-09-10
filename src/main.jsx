import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./page/ContactPage/Contact.jsx";
import AddStafPage from "./page/AddStaffPage/AddStafPage.jsx";
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCSx-FoLuGcp1PSgKOk8tFk9aEj1b9vFxQ",
//   authDomain: "cprdata-np.firebaseapp.com",
//   projectId: "cprdata-np",
//   storageBucket: "cprdata-np.appspot.com",
//   messagingSenderId: "628353937264",
//   appId: "1:628353937264:web:6de8e5cde0d4cf564a69b5",
// };
// initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/login",
    element: <App />,
  },
  {
    path: "/contacts",
    element: <Contact />,
  },
  {
    path: "/add_staff",
    element: <AddStafPage />,
  },
  {
    path: "/about",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
