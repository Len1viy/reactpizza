import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import {Button} from "../index";


const Card = React.memo(({ size, doughs, sizes, name, imageUrl, price, types, onClickAdd}) => {
    const [activeDough, setActiveDough] = React.useState(types[0])
    const [activeSize, setActiveSize] = React.useState(size.indexOf(sizes[0]))

    const changeDough = (index) => {
        setActiveDough(index)
    }

    const changeSize = (index) => {
        setActiveSize(index)
    }


    const addToTheCart = (obj) => {
        onClickAdd(obj)
    }



    return (
        <div className="card">
            <img src={imageUrl} alt="pizza1" className="card-image"/>
            <p className="card-name">{name}</p>
            <div className="card-selector">
                <ul>
                    {doughs && doughs.map((name, index) => (<li className={classNames({
                        "active": activeDough === index,
                        "disabled": !types.includes(index)
                    })} key={`${name}_${index}`} onClick={() => changeDough(index)}>{name}</li>))}
                </ul>
                <ul>
                    {size && size.map((name, index) => (<li className={classNames({
                        "active": activeSize === index,
                        "disabled": !sizes.includes(name)
                    })} key={`${name}_${index}`} onClick={() => changeSize(index)}>{name} см.</li>))}

                </ul>
            </div>
            <div className="card-bottom">
                <p className="card-bottom-price">от {price} ₽</p>
                <Button className="button-card-bottom" onClick={() => addToTheCart({name, imageUrl, price, activeDough: doughs[activeDough], activeSize: size[activeSize], count: 1})}>
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {/*<i>2</i>*/}
                </Button>
            </div>
        </div>
    )
})

Card.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    price: PropTypes.number,
    types: PropTypes.arrayOf(PropTypes.number),
    sizes: PropTypes.arrayOf(PropTypes.number),
    category: PropTypes.number,
    rating: PropTypes.number,
}

Card.defaultProps = {
    types: [],
    sizes: [],
    price: 0,
    name: "---",
}

export default Card