import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import App from "./App"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import OtpInput from "./OtpInput";
import Pagination from "./pagination/Pagination";


const rootElement = document.getElementById("root");
const Layout = ()=>{
    return (
        <div>
            <Header / >
            <Outlet / >
        </div>  
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout / >,
        children: [
            {
                path:"/",
                element: <App />
                
            },
            {
                path:"otpInput",
                element: <OtpInput />
                
            },
            {
                path: "Pagination",
                element: <Pagination />
            },
        ],
    }

])



const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter} />);