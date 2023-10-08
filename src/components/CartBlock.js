import {Button} from "./index";

const CartBlock = ({ name, imageUrl, price, activeDough, activeSize, count, index, onClickDeletePizza, onClickIncrementPizza, onClickDecrementPizza }) => {
    const deletePizza = (index) => {
        onClickDeletePizza(index)
    }

    const decrPizza = (index) => {
        onClickDecrementPizza(index)
    }

    const incrPizza = (index) => {
        onClickIncrementPizza(index)
    }



    return (
        <div className="cart-block">
            <div className="cart-container-delimiter">
                <div className="cart-container-delimiter-background"></div>
            </div>
            <div className="cart--pizza">
                <div className="cart--pizza--block">
                    <img src={imageUrl} alt="pizzaIcon" className="cart--pizza--logo"/>
                    <div className="text">
                        <p className="name">{name}</p>
                        <p className="descr">{`${activeDough}, ${activeSize} см.`}</p>
                    </div>
                </div>
                <div className="counter">
                    <Button className="button--circle" outline={true} onClick={() => decrPizza(index)}>
                        <span className="">-</span>
                    </Button>
                    <i>{count}</i>
                    <Button className="button--circle" outline={true} onClick={() => incrPizza(index)}>
                        <span className="">+</span>
                    </Button>
                </div>
                <div className="summ">
                    <p>{`${price * count} ₽`}</p>
                </div>
                <Button className="button--cart--delete button--circle pizza" onClick={() => deletePizza(index)}>
                    <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.74791 6.95572L6.49931 4.70712L8.74791 2.45852C9.16184 2.04459 9.16184 1.37338 8.74791 0.959454C8.33398 0.545525 7.66277 0.545525 7.24884 0.959454L5.00024 3.20805L2.75164 0.959454C2.33771 0.545525 1.66651 0.545525 1.25258 0.959454C0.838648 1.37338 0.838648 2.04459 1.25258 2.45852L3.50118 4.70712L1.25258 6.95572C0.838649 7.36965 0.838649 8.04086 1.25258 8.45479C1.66651 8.86872 2.33772 8.86872 2.75164 8.45479L5.00024 6.20619L7.24884 8.45479C7.66277 8.86872 8.33398 8.86872 8.74791 8.45479C9.16184 8.04086 9.16184 7.36965 8.74791 6.95572Z" fill="#D0D0D0"/>
                    </svg>
                </Button>
            </div>
        </div>
    )
}
export default CartBlock