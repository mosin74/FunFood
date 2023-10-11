
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
import HelpPartner from './component/HelpPartner.js';
import { Provider } from 'react-redux';
import store from './component/Store.js';
import CartPage from './component/cartPage.js';
import HelpLegal from './component/HelpLegal.js';
import HelpFAQS from './component/HelpFAQS.js';
import Thanks from './component/Thanks.js';




const About = lazy(() => import("./component/About"));

const AppLayout = () => (
    <><Provider store={store}>

        <HeaderComponent />
        <Outlet />
        <FooterComponent />
    </Provider>
    </>
);

const HelpSupport = () => (
    <>
        <Provider store={store}>
            <HeaderComponent />
            {/* <Help /> */}
            <Outlet />
            {/* <HelpFAQS/> */}
            {/* <Help/> */}
            {/* <FooterComponent /> */}

        </Provider>
    </>
);

const SearchComponenet = () => (
    <>
        <Provider store={store}>
            <HeaderComponent />
            <Search />
        </Provider>
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
                element: <Body />,
                errorElement: <Error />
            },
            // {
            //     path: "/Search",
            //     element: <Search />,
            //     errorElement: <Error />

            // },
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
            {
                path: "/cart",
                element: <CartPage />,
                errorElement: <Error />

            },
        ]

    },
    {
        path: "/Help",
        element: <HelpSupport />,
        errorElement: <Error />,
        children: [
            {
                path: "/Help",
                element: <HelpPartner />,
                errorElement: <Error />
            },
            {
                path: "/Help/legal",
                element: <HelpLegal />,
                errorElement: <Error />

            },
            {
                path: "/Help/FAQS",
                element: <HelpFAQS />,
                errorElement: <Error />

            }
        ]
    },
    {
        path:"/Search",
        element:<SearchComponenet/>,
        // children:[
        //     path"/Search",
        // ]
    },
    {
        path:"/thanks",
        element:<Thanks/>
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<AppLayout />);// for rendaring react element

root.render(<RouterProvider router={appRouter} />);
