import cart from "../imgs/icon_cart.png"
import logo_of_delete from "../imgs/delete_cart.svg"
import {Button} from "./index";
const CartTop = ({onClickDeletePizzas}) => {
    const deletePizzas = () => {
        onClickDeletePizzas()
    }
    return (

        <div className="content-cart-top">
            <div className="cart-name">
                <img className="cart-logo" src={cart} alt="Icon_Cart"/>
                <h1>Корзина</h1>
            </div>
            <div className="cart-delete">
                <Button className="button--cart--delete" onClick={() => deletePizzas()}>
                    <img src={logo_of_delete} alt="logo_of_delete" className="cart-delete-logo"/>
                    <p>Очистить корзину</p>
                </Button>
            </div>
        </div>

    )
}

export default CartTop