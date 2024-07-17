import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardPage from "./dashboard/index.jsx";
import HomePage from "./home/index.jsx";
import { SigninPage } from "./auth/signin/index.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/dashboard",
				element: <DashboardPage />,
			},
		],
	},
	{
		path: "/auth/sign-in",
		element: <SigninPage />,
	},
	{
		path: "/",
		element: <HomePage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<RouterProvider router={router} />
		</ClerkProvider>
	</React.StrictMode>
);
