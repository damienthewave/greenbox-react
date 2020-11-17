export const ORDERS = "/orders"
export const ITEMS = "/items"
export const SHOP = "/shop"

export const ITEMS_CREATE = ITEMS + "/create"

export const SHIPPING = SHOP + "/shipping"

export function getRouteForItem(id) {
  return ITEMS + "/" + id
}

export function getRouteForOrder(id) {
  return ORDERS + "/" + id
}

export function addParam(url, param, value) {
  return url + "?" + param + "=" + value
}
