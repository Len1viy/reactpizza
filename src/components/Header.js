import logo from "../imgs/image 1.png";
import cart from "../imgs/cart.svg";
import Button from "./Button";
import {Link} from "react-router-dom"

const Header = ({count, price}) => {
    return (
        <header className="Header">
            <div className="header-container">
                <Link to="/">
                    <div className="header-container-logo-and-name">
                        <img className="logo" src={logo} alt="logo"></img>
                        <div className="header-container-name">
                            <h1 className="text-name">React Pizza</h1>
                            <p className="text-description">самая вкусная пицца в мире</p>
                        </div>

                    </div>
                </Link>

                <div className="button-container">
                    <Link to="/cart">
                        <Button className="button--cart">
                            <span>{price} ₽</span>
                            <div className="button-delimiter"></div>
                            <img src={cart}></img>
                            <span>{count}</span>
                        </Button>
                    </Link>

                </div>
            </div>
            <div className="header-container-delimiter">
                <div className="header-container-delimiter-background"></div>
            </div>
        </header>
    )
}

export default Header