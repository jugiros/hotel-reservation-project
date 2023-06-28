import { Day } from "../src/interfaces/day";
import { Hotel } from "../src/interfaces/hotel";
import * as dataSet from "../documents/dataSet.json";

const getBestOffer = async (days: Day[]): Promise<Hotel> => {
  const arrHotels: Hotel = dataSet;
  console.log(arrHotels);
  const hotel: Hotel = {
    id: 1,
    name: "Lakewood",
    qualification: 3,
    regularCost: 110,
    rewardCost: 80,
    regularCostWeekend: 90,
    rewardCostWeekend: 80,
  };
  return hotel;
};
