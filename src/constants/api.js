export const API_BASE_URL = "http://localhost:8080";

const ORDERS = "/orders";
const ITEMS = "/items";
const CREATE = "/create";

const ALL = "/all";

export const ORDERS_URL = API_BASE_URL + ORDERS;
export const ORDERS_ALL_URL = API_BASE_URL + ORDERS + ALL;
export const ORDERS_CREATE_URL = ORDERS_URL + CREATE;
export const ORDERS_COMPLETE_URL = ORDERS_URL + "/complete";
export const SESSION_SUMMARY = ORDERS_URL + "/summary"

export const completeOrderByIdUrl = (id) => ORDERS_COMPLETE_URL + "/" + id;
export const getOrderByIdUrl = (id) => ORDERS_URL + "/" + id;

export const ITEMS_URL = API_BASE_URL + ITEMS;
export const ITEMS_ALL_URL = API_BASE_URL + ITEMS + ALL;
export const ITEMS_CREATE_URL = API_BASE_URL + ITEMS + CREATE;

export const getItemByIdUrl = (id) => ITEMS_URL + "/" + id;
export const changeItemsAvailabilityByIdUrl = (id, isAvailable) =>
  ITEMS_URL + "/" + id + "?isAvailable=" + isAvailable;

