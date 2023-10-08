import React from "react"
import {CartBlock, CartBottom, CartClear, CartTop} from "../components";
import {useDispatch} from "react-redux";
import {decrementPizza, incrementPizza, deletePizzas, deletePizza} from "../redux/actions/cart";

const Cart = ({count, price, cart}) => {
    const dispatch = useDispatch()
    const onClickDecrementPizza = React.useCallback((index) => {
        dispatch(decrementPizza(index))
    }, [])

    const onClickIncrementPizza = React.useCallback((index) => {
        dispatch(incrementPizza(index))
    }, [])
    const onClickDeletePizza = React.useCallback((index) => {
        dispatch(deletePizza(cart[index]))
    }, [cart])
    const onClickDeletePizzas = React.useCallback((index) => {
        dispatch(deletePizzas())
    }, [])

    return (
        <div className="content">
            <div className="content-cart">
                {cart.length !== 0 &&
                    <div className="cart-container">
                    <CartTop onClickDeletePizzas={onClickDeletePizzas}/>
                    <div className="cart-blocks">
                        {
                            cart.map((obj, index) => <CartBlock {...obj} index={index}
                                                                onClickDeletePizza={onClickDeletePizza}
                                                                onClickIncrementPizza={onClickIncrementPizza}
                                                                onClickDecrementPizza={onClickDecrementPizza}
                                                                key={`${obj.name}_${obj.activeDough}_${obj.activeSize}`}/>)
                        }
                    </div>
                    <CartBottom count={count} price={price}/>
                </div>
                }
                {cart.length === 0 && <CartClear/>}


            </div>
        </div>
    )
}

export default Cart