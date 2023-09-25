import { render } from "@testing-library/react"
import { HeaderComponent } from "../component/Header"
import { Provider } from "react-redux";
import { ZomatoLogo } from "../config";
import { StaticRouter } from "react-router-dom/server";

test('Logo should load on rendaring header', () => {

    const header = render(<StaticRouter><HeaderComponent /></StaticRouter>)
    console.log(header);
   const logo = header.getByTestId("logo")
//    console.log(logoc);
   expect(logo.src).toBe(ZomatoLogo);
   const ThemLogo=header.getAllByTestId("ThemLogo");
   console.log(ThemLogo);
   expect(ThemLogo[0].src).toBe("http://localhost/dummy.png");


})
