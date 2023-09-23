
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './component/Body.js';
import { HeaderComponent } from './component/Header.js';
import { FooterComponent } from './component/Footer.js';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Error from "./component/ErrorPage.js";
// import About from "./component/About.js";
import Contact from "./component/Contact.js";
import RestaurantMenu from './component/RestaurantMenu.js';
import ClassComp from './component/ClassComp.js';
import Search from './component/Search.js';
import Help from './component/Help.js';
// import { Provider } from 'react-redux';
// import store from '../utils/Store.js';


const About = lazy(() => import("./component/About"));

const AppLayout = () => (
    <>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </>
);

const HelpSupport = () => (
    <>
        <HeaderComponent />
        <Help />
    </>);

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />
            },
            {
                path: "/Search",
                element: <Search />,
                errorElement: <Error />

            },
            {
                path: "/About",
                element:
                    <Suspense fallback="Loading....">
                        <About />
                    </Suspense>,
                errorElement: <Error />
            },
            {
                path: "/Contact",
                element: <Contact />,
                errorElement: <Error />,
                children: [
                    {
                        path: "ClassComp",
                        element: <ClassComp />,
                        errorElement: <Error />,
                    }
                ]
            },
            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />,
                errorElement: <Error />
            },
        ]

    },
    {
        path: "/Help",
        element: <HelpSupport />,
        errorElement: <Error />
    },

])



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);// for rendaring react element 

root.render(<RouterProvider router={appRouter} />);
