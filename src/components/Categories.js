import React from "react"
import PropTypes from "prop-types";

const Categories = React.memo(({activeCategory, items, onClickCategory}) => {
        return (
            <ul className="categories-buttons-list">
                <li className={activeCategory === null ? "active" : ""} onClick={() => onClickCategory(null)}>Все</li>
                {items &&
                    items.map((name, index) => (
                        <li className={activeCategory === index ? "active" : ""} onClick={() => (onClickCategory(index))}
                            key={`${name}_${index}`}>{name}</li>
                    ))}

            </ul>
        )
    }
)


Categories.propTypes = {
    activeCategory: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired,
}

Categories.defaultProps = {
    activeCategory: null,
    items: [],
}

export default Categories
