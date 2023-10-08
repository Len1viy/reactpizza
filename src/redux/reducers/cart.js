const initialState = {
    items: []
}
const DECREMENT_PIZZA = "DECREMENT_PIZZA"
const INCREMENT_PIZZA = "INCREMENT_PIZZA"
const DELETE_PIZZA = "DELETE_PIZZA"
const SET_PIZZA = "SET_PIZZA"
const DELETE_PIZZAS = "DELETE_PIZZAS"
const cart = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZA:
            const index = state.items.findIndex((obj) => (obj.name === action.payload.name && obj.activeDough === action.payload.activeDough && obj.activeSize === action.payload.activeSize))
            if (index === -1) {
                return {
                    items: [...(state.items), action.payload]
                }
            } else {
                state.items[index].count += 1
                return {
                    items: [...state.items]
                }
            }
        case INCREMENT_PIZZA:
            state.items[action.payload].count += 1
            return {
                items: [...state.items]
            }
        case DELETE_PIZZA:
            return {
                items: [...(state.items.filter((item) => item !== action.payload))]
            }
        case DECREMENT_PIZZA:
            state.items[action.payload].count -= 1
            return {
                items: state.items.filter((item) => item.count !== 0)
            }
        case DELETE_PIZZAS:
            return {
                items: []
            }
        default:
            return state
    }
}

export default cart