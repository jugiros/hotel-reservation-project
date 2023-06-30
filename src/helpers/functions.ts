import { Day } from "../interfaces/day";
import { Hotel } from "../interfaces/hotel";
import * as dataSet from "../../documents/dataSet.json";
import { CostHotel } from "../interfaces/costHotel";
import { useAlertStore } from "@/stores/alert";
import { Alert } from "@/interfaces/alert";

/**
 * Function to validate the array of hotel costs and return the cheapest in the array.
 * @param arrCostHotel
 */

const validCostHotelData = (arrCostHotel: CostHotel[]): Hotel => {
  // Gets the element with the least cost value of an object.
  const minorCostHotelReduce: CostHotel = arrCostHotel.reduce(
    (costHotelPrev, costHotelCurr) => {
      return costHotelPrev.cost < costHotelCurr.cost
        ? costHotelPrev
        : costHotelCurr;
    }
  );

  //Filter to obtain the elements with the lowest cost.
  const arrFilterCostHotel: CostHotel[] = arrCostHotel.filter(
    (costHotel) => costHotel.cost === minorCostHotelReduce.cost
  );

  // Gets the element with the higher qualification value of an object.
  const bestCostHotelReduce: CostHotel = arrFilterCostHotel.reduce(
    (costHotelPrev, costHotelCurr) => {
      return costHotelPrev.hotel.qualification >
        costHotelCurr.hotel.qualification
        ? costHotelPrev
        : costHotelCurr;
    }
  );

  return bestCostHotelReduce.hotel;
};

/**
 * Function to obtain the best offer for a hotel reservation based on the days to reserve and the
 * costs for each hotel.
 * @param days
 */
const getBestOffer = (days: Day[], rewardClient: boolean): Hotel => {
  const arrHotels: Hotel[] = dataSet.arrHotels;
  const arrCostHotel: CostHotel[] = [];

  let cost = 0;

  days.forEach((day) => {
    arrHotels.forEach((hotel, index) => {
      if (day.weekend) {
        if (rewardClient) {
          cost = hotel.rewardCostWeekend;
        } else {
          cost = hotel.regularCostWeekend;
        }
      } else {
        if (rewardClient) {
          cost = hotel.rewardCost;
        } else {
          cost = hotel.regularCost;
        }
      }
      arrCostHotel[index] = {
        id: index,
        cost: cost + (arrCostHotel[index] ? arrCostHotel[index].cost : 0),
        hotel: hotel,
      };
    });
  });

  return validCostHotelData(arrCostHotel);
};

/**
 * Function to display the alert message and be able to use it in any component.
 * @param msg
 * @param event
 */
const viewAlert = (msg: string, event: string) => {
  const alertStore = useAlertStore();
  const alert: Alert = {
    msg: msg,
    viewAlert: true,
    styleClass: event,
  };
  alertStore.setAlertObj(alert);
};

export { viewAlert, getBestOffer };
