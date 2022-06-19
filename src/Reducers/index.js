
import { combineReducers } from "@reduxjs/toolkit";
import BuyTicket from "./BuyTicket";

const allReducers = combineReducers({
    BuyTicket: BuyTicket,
});

export default allReducers;