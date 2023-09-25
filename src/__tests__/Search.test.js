import { toBeInTheDocument } from "@testing-library/jest-dom"
import { render, getByTestId, waitFor } from "@testing-library/react";
import Search from '../component/Search.js';
import { StaticRouter } from "react-router-dom/server";
// import { json } from "react-router-dom";




global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => { return Promise.resolve(null) },
    });
});



test('load shimmmer of on search section ', () => {
    const searchSection = render(<StaticRouter><Search /></StaticRouter>);
    console.log(searchSection);
    const input = searchSection.getByTestId("Shimmer");
    console.log(input);
    expect(input.children.length).toBe(10);
})


//



// await waitFor{()=>expect(searchSection.getByTestId("Search"))}
test('load search page ', async () => {


    const searchSection = render(<StaticRouter><Search /></StaticRouter>);
    await waitFor(() => expect(body.getByTestId("Search")));
    // console.log(searchSection);
    const OnMind = searchSection.getByTestId("OnMind");
    console.log(OnMind);
    expect(OnMind.children.length).toBe("10");
})
