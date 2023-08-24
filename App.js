
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';
//You can do it by react 
const heading = React.createElement("h1",
  {
    className: "heading",//attribute not only  
    hello: "world",  //used for give props 
    key: "obj1",
  }, "You can do it by parcel");


// console.log(heading); 
// //  ==>  it gives us  createElement as an object in short createlement is an object.


// ==> JSX 
const heading1 = (
  <h1 className='head2' id='2nd' key="2">"You can do it "</h1>
)


//  ==> Component 
const Heading3 = () => {

  return (
    <h1>"You can do it by Component"</h1>
  );
}

const HeaderComponent = () => {
  return (

    <div>
      {/* For rendering above heading 1 variable we use following syntax  */}
      {heading1}
      {/* For rendering above heading 3 component we can use both following syntax and this is know ans ComponentComposition  */}
      <Heading3/> 
      {Heading3()}
      <h3>You can do it by Component</h3>
      <h3>And You will</h3>

    </div>
  );
}



const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading1);// for rendaring react element 
root.render(<Heading3 />);
root.render(<HeaderComponent />);



