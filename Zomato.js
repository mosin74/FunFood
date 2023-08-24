
import React, { createElement } from 'react';
import ReactDOM from 'react-dom/client';


const HeaderComponent = () => {

    return (
        <div className="nav-bar">
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Zomato-Logo.png" alt="" className="logo" />

            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>

    );
}







// // We can do by this 

// const RestroCard = () => {
//     return (

//         <div className="Card">
//             <img src="https://images5.alphacoders.com/381/381504.jpg" alt="" className='Pizza'/>
//             <h3>Pocket cafe</h3>
//             <h4>Pizza,Burger</h4>
//             <h5>5 star</h5>
//         </div>
//     );
// };




// // OR BY This 
// const PocketCafe ={

//     name:"Pocket Cafe",
//     Image:"https://images5.alphacoders.com/381/381504.jpg",
//     cusines :["Pizaa","Burger"],
//     rating :"4.2",


//     };


// const RestroCard = () => {
//     return (

//         <div className="Card">
//             <img src={PocketCafe.Image} alt="" className='Pizza'/>
//             <h3>{PocketCafe.name}</h3>
//             <h4>{PocketCafe.cusines.join(",")}</h4>
//             <h5>{PocketCafe.rating}star</h5>
//         </div>
//     );
// };





// FOr dyanamic Data entring from API or else 



// 1) method

// const restaurantList = [
//     {
//         data: {
//             type: "restaurant",
//             id: "5938",
//             name: "Sikandar Rolls",
//             cloudinaryImageId: "m6c0uvtstsvvnzb99fkm",
//             cuisines: ["Rolls", "Biryani"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",
//             id: "5939",
//             name: "KFC",
//             cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
//             cuisines: ["Snacks", "Biryani" ,"Fast Food"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",
//             id: "5940",
//             name: "Louis Burger",
//             cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
//             cuisines: ["Fast Food", "American"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",

//             id: "5941",
//             name: "McDonald's",
//             cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
//             cuisines: ["Burgers", "cafe","Desserts"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",
//             id: "5942",
//             name: "Grameen Kulfi",
//             cloudinaryImageId: "garnimnzruqmizx2acjt",
//             cuisines: ["Ice Cream", "Cake" ,"Desserts"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",
//             id: "5943",
//             name: "Barbeque Nation",
//             cloudinaryImageId: "qzqeafcmayvxggjgj7rf",
//             cuisines: ["North Indian", "Biryani","Mughlai","Desserts"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",
//             id: "5944",
//             name: "Lavonne",
//             cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
//             cuisines: ["Bakery", "Desserts"],
//             rating: "4.1"
//         },
//     },
//     {

//         data: {
//             type: "restaurant",
//             id: "5945",
//             name: "Subway",
//             cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
//             cuisines: ["Fast Food", "Salads","Beverages"],
//             rating: "4.1"
//         },
//     },
//     {
//         data: {
//             type: "restaurant",
//             id: "5946",
//             name: "Pizza Hut",
//             cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
//             cuisines: ["Pizzas"],
//             rating: "4.1"
//         },

//     },
//     {
//         data: {
//             type: "restaurant",
//             id: "5947",
//             name: "Hotel Empire",
//             cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
//             cuisines: ["Kebabs","Biryani","North Indian"],
//             rating: "4.1"
//         },

//     },
// ];

// const RestroCard = ({restaurant}) => {
//     const{cloudinaryImageId , name , cuisines , rating}=restaurant.data;
//     console.log(restaurant);
//     return (

//         <div className="Card">
//             <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+cloudinaryImageId}/>
//             <h3>{name}</h3>
//             <h4>{cuisines.join(",")}</h4>
//             <h5>{rating}star</h5>
//         </div>
//     );
// };



// const Body = () => {
//     return (
//         <div className='restaro-list'>
//             <RestroCard restaurant={restaurantList[0]} />
//             <RestroCard restaurant={restaurantList[1]} />
//             <RestroCard restaurant={restaurantList[2]} />
//             <RestroCard restaurant={restaurantList[3]} />
//             <RestroCard restaurant={restaurantList[4]} />
//             <RestroCard restaurant={restaurantList[5]} />
//             <RestroCard restaurant={restaurantList[6]} />
//             <RestroCard restaurant={restaurantList[7]} />
//             <RestroCard restaurant={restaurantList[8]} />
//             <RestroCard restaurant={restaurantList[9]} />




//         </div>

//     );
// };




//2nd Method 
const restaurantList = [
    {
        data: {
            type: "restaurant",
            id: "5938",
            name: "Sikandar Rolls",
            cloudinaryImageId: "m6c0uvtstsvvnzb99fkm",
            cuisines: ["Rolls", "Biryani"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",
            id: "5939",
            name: "KFC",
            cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
            cuisines: ["Snacks", "Biryani", "Fast Food"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",
            id: "5940",
            name: "Louis Burger",
            cloudinaryImageId: "19d3d352cc815b9d88b22617b41fa97b",
            cuisines: ["Fast Food", "American"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",

            id: "5941",
            name: "McDonald's",
            cloudinaryImageId: "ee5f8e06b300efc07c9fe3f4df40dfc4",
            cuisines: ["Burgers", "cafe", "Desserts"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",
            id: "5942",
            name: "Grameen Kulfi",
            cloudinaryImageId: "garnimnzruqmizx2acjt",
            cuisines: ["Ice Cream", "Cake", "Desserts"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",
            id: "5943",
            name: "Barbeque Nation",
            cloudinaryImageId: "qzqeafcmayvxggjgj7rf",
            cuisines: ["North Indian", "Biryani", "Mughlai", "Desserts"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",
            id: "5944",
            name: "Lavonne",
            cloudinaryImageId: "emlehbuwgsmryxhwzhvq",
            cuisines: ["Bakery", "Desserts"],
            rating: "4.1"
        },
    },
    {

        data: {
            type: "restaurant",
            id: "5945",
            name: "Subway",
            cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
            cuisines: ["Fast Food", "Salads", "Beverages"],
            rating: "4.1"
        },
    },
    {
        data: {
            type: "restaurant",
            id: "5946",
            name: "Pizza Hut",
            cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
            cuisines: ["Pizzas"],
            rating: "4.1"
        },

    },
    {
        data: {
            type: "restaurant",
            id: "5947",
            name: "Hotel Empire",
            cloudinaryImageId: "qltgnkyywuo5gmnpqzbm",
            cuisines: ["Kebabs", "Biryani", "North Indian"],
            rating: "4.1"
        },

    },
];

const RestroCard = ({ cloudinaryImageId, name, cuisines, rating }) => {
    return (

        <div className="Card">
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h5>{rating}star</h5>
        </div>
    );
};

const Body = () => {
    return (
        <div className='restaro-list'>
            <RestroCard {...restaurantList[0].data} key={restaurantList[0].data.id} />
            <RestroCard {...restaurantList[1].data} />
            <RestroCard {...restaurantList[2].data} />
            <RestroCard {...restaurantList[3].data} />
            <RestroCard {...restaurantList[4].data} />
            <RestroCard {...restaurantList[5].data} />
            <RestroCard {...restaurantList[6].data} />
            <RestroCard {...restaurantList[7].data} />
            <RestroCard {...restaurantList[8].data} />
            <RestroCard {...restaurantList[9].data} />


            {/* Above  Can also done By Map
            try that  */}

        </div>
    );
};













const FooterComponent = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
};

const Rendaring = () => (
    <>
        <HeaderComponent />
        <Body />
        <FooterComponent />
    </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Rendaring />);// for rendaring react element 
