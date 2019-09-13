import React, { useReducer } from "react";
import bikeRentalsContext from "./bikeRentalsContext";
import BikeRentalsReducer from "./bikeRentalsReducer";
import { GET_BIKERENTALS, POST_SELECTIONS } from "../types";
import axios from "axios";

const BikeRentalsState = props => {
  // Initial State
  const initialState = {
    bikeRentalsData: null
  };
  const [state, dispatch] = useReducer(BikeRentalsReducer, initialState);

  const getBikeRentalsData = async () => {
    try {
      const res = await axios.get("/api/bikerentals");
      dispatch({
        type: GET_BIKERENTALS,
        payload: res.data.products
      });
    } catch (err) {
      console.log(err);
    }
  };

  const postSelections = selections => {
    try {
      dispatch({
        type: POST_SELECTIONS,
        payload: selections
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <bikeRentalsContext.Provider
      value={{
        bikeRentalsData: state.bikeRentalsData,
        getBikeRentalsData,
        postSelections
      }}
    >
      {props.children}
    </bikeRentalsContext.Provider>
  );
};

export default BikeRentalsState;
