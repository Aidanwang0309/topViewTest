import React, { useContext, useEffect, Fragment } from "react";
import BikeRentalsContext from "../../context/bikeRentals/bikeRentalsContext";
import BikeRentals from "../bikeRentals/BikeRentals";

const Home = () => {
  const bikeRentalsContext = useContext(BikeRentalsContext);
  const { bikeRentalsData, getBikeRentalsData } = bikeRentalsContext;

  useEffect(() => {
    getBikeRentalsData();
    // eslint-disable-next-line
  }, []);

  return <div>{bikeRentalsData !== null && <BikeRentals />};</div>;
};

export default Home;
