import React from "react"
import {Card, Categories, Sort, Loading} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from "../redux/actions/filters"
import {fetchPizzas} from "../redux/actions/pizzas";
import {setPizza} from "../redux/actions/cart";


const categoryNames = ["Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",]

const sortItems = [
    {name: 'популярности', type: "rating", order: "desc"},
    {name: "цене", type: "price", order: "desc"},
    {name: "алфавиту", type: "name", order: "asc"},
]
const Home = () => {
    const dispatch = useDispatch()


    const items = useSelector(({pizzas}) => pizzas.items)
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded)
    const {category, sortBy, order} = useSelector(({filters}) => filters)
    React.useEffect(() => {
        dispatch(fetchPizzas(category, sortBy, order))
    }, [category, sortBy]);
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSort = React.useCallback((index) => {
        dispatch(setSortBy(sortItems[index]))
    }, [])

    const onSelectAdd = React.useCallback((obj, index) => {
        dispatch(setPizza(obj))
    }, [])

    return (
        <div className="content">
            <div className="content-top">
                <Categories activeCategory={category} onClickCategory={onSelectCategory} items={categoryNames}/>
                <Sort activeSortBy={sortBy.type} onClickSorting={onSelectSort} items={sortItems}/>
            </div>
            <div className="content-main">
                <h2>Все пиццы</h2>
                <div className="content-cards">
                    {isLoaded ?
                        (items.map(obj => <Card doughs={
                            [
                                "традиционное",
                                "тонкое"
                            ]
                        } size={
                            [
                                26,
                                30,
                                40,
                            ]

                        } isLoading={true} {...obj}
                                                key={`${obj.name}_${obj.id}`} onClickAdd={onSelectAdd}/>)) : Array(12).fill(0).map((_, index) => (
                            <Loading key={index}/>))}
                </div>
            </div>
        </div>
    )
}

export default Home