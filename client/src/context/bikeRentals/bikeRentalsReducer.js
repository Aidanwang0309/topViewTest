import { GET_BIKERENTALS, POST_SELECTIONS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BIKERENTALS:
      return { ...state, bikeRentalsData: action.payload };
    case POST_SELECTIONS:
      console.log(action.payload);
    default:
      return state;
  }
};
