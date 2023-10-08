import {Button} from "./index";
import {Link} from "react-router-dom";

const CartBottom = ({count, price}) => {
    return (
        <div className="bottom">
            <div className="cart-itog">
                <div className="cart-itog-count">
                    <span className="cart-itog-count-text">Всего пицц:</span>
                    <span className="cart-itog-count-count">{count} шт.</span>
                </div>
                <div className="cart-itog-price">
                    <span className="cart-itog-price-text">Сумма заказа:</span>
                    <span className="cart-itog-price-price">{price} ₽</span>
                </div>
            </div>
            <div className="cart--buttons--bottom">
                <Link className="link-back-cart" to="/">
                    <Button className="button--cart--delete button--circle cart-bottom">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <p>Вернуться назад</p>
                    </Button>
                </Link>
                <Button className="button--cart button--circle pay">
                    <p>Оплатить сейчас</p>
                </Button>
            </div>

        </div>

    )
}

export default CartBottom