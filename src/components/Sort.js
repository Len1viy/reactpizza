import vector from "../imgs/Vector.svg";
import React from "react"
import PropTypes from "prop-types";

const Sort = React.memo(({items, activeSortBy, onClickSorting}) => {
    const sortRef = React.useRef()
    const activeLabel = items.find(obj => obj.type === activeSortBy).name
    const onSelectItem = (index) => {
        onClickSorting(index)
    }
    const [opened, setOpened] = React.useState(false)
    const doOpen = () => {
        setOpened(!opened)
    }

    const handleOutsideClick = (e) => {
        if (e.target.offsetParent !== sortRef.current) {
            setOpened(false)
        }
    }

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, [])


    return (
        <div ref={sortRef} className="sort">
            <div className="sort-label">
                <img className={!opened ? "image-rotated" : ""} src={vector}></img>
                <b>Сортировка по:</b>
                <span onClick={doOpen}>{activeLabel}</span>
            </div>
            <div className="sort-popup">
                <ul className={opened ? "open" : ""}>
                    {items.map((obj, index) => (
                        <li className={activeSortBy === obj.type ? "active" : ""} onClick={() => onSelectItem(index)}
                            key={`${obj.type}_${index}`}>{obj.name}</li>))}
                </ul>
            </div>
        </div>
    )
})

Sort.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    activeSortBy: PropTypes.string.isRequired,
    onClickSorting: PropTypes.func,
}

Sort.defaultProps = {
    items: [],

}


export default Sort