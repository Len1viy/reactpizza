export const setPizza = (element) => {
    return {
        type: "SET_PIZZA",
        payload: element,
    }
}


export const incrementPizza = (element) => {
    return {
        type: "INCREMENT_PIZZA",
        payload: element,
    }
}

export const decrementPizza = (element) => {
    return {
        type: "DECREMENT_PIZZA",
        payload: element
    }
}

export const deletePizzas = (element) => {
    return {
        type: "DELETE_PIZZAS",
        payload: element
    }
}

export const deletePizza = (element) => {
    return {
        type: "DELETE_PIZZA",
        payload: element
    }
}