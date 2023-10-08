import clearImage from "../imgs/shopping-cart-colour 1.png"
import {Link} from "react-router-dom";
import {Button} from "./index";

const CartClear = () => {
    return (
        <div className="cart-container">
            <div className="cart--clear">
                <p className="text-about-clear">Корзина пустая 😕</p>
                <p className="text-description clear-descr">Вероятней всего, вы не заказывали ещё пиццу.</p>
                <p className="text-description clear-descr">Для того, чтобы заказать пиццу, перейди на главную страницу.</p>
                <img src={clearImage} alt="clearImage" className="clear-image"/>
                <Link className="link-back" to="/">
                    <Button className="button-back">
                        <p>Вернуться назад</p>
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default CartClear