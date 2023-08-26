
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Body } from './component/Body.js';
import { HeaderComponent } from './component/Header.js';
import { FooterComponent } from './component/Footer';


const Rendaring = () => (
    <>
        <HeaderComponent />
        <Body />
        <FooterComponent />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Rendaring />);// for rendaring react element 
