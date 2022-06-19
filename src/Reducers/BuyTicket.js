const initialState = {
    theater: "",
    movie: "",
    date: "",
    time: "",
    number: 1,
    tickets: {'學生優惠票': {amount: 1, price: 180}},
    meals: {},
    tradeDateTime: "",
    tradeNumber: "",
    seats: [],
    total: 0,
}

const BuyTicket = (state = initialState, { type, payload }) => {
    switch (type) {

        case "set":
            return { ...state, ...payload.data }

        default:
            return state
    }
}

export default BuyTicket;