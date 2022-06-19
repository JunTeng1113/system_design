export const BuyTicket = (type, data) => {
    return {
        type: type,
        payload:{
            data: data
        }
    }
}