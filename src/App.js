import "./styles/scss/all.css"

import {Header} from "./components/index";
import {Home, Cart} from "./pages"
import {Route, Routes} from "react-router-dom";
import React from "react"
import {useSelector} from "react-redux";

function App() {
    const cart = useSelector(({cart})=> cart.items)
    const count = (cart.length !== 0 ? cart.map((obj) => obj.count).reduce(function (a, b) {
        return a + b
    }) : 0)
    const price = (cart.length !== 0 ? cart.map((obj) => obj.count * obj.price).reduce(function (a, b) {
        return a + b
    }): 0)

    return (
        <div className="App">
            <Header count={count} price={price}/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="cart" element={<Cart count={count} price={price} cart={cart}/>}/>
            </Routes>
        </div>
    );
}



export default App

