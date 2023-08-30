
import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import  Body  from './component/Body.js';
import { HeaderComponent } from './component/Header.js';
import { FooterComponent } from './component/Footer.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from "./component/ErrorPage.js";
import About from "./component/About.js";
import Contact from "./component/Contact.js";
import RestaurantMenu from './component/RestaurantMenu.js';




const AppLayout = () => (
    <>
        <HeaderComponent />
        {/* {here we have to provide outlet } */}
        {/* <Body /> */}
        <Outlet/>
        <FooterComponent />
    </>
);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body/>,
                errorElement: <Error />
            },
            {
                path: "/About",
                element: <About/>,
                errorElement: <Error />
            },   
            {
                path: "/Contact",
                element: <Contact/>,
                errorElement: <Error />
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu/>,
                errorElement: <Error />
            },
        ]
            
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);// for rendaring react element 

root.render(<RouterProvider router={appRouter} />);
