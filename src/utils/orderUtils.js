export function getPositionsFromCart(cartItems) {
  console.log(cartItems)
  let positions = cartItems.map((cartItem) => {
    return {
      itemId: cartItem.item.id,
      amount: +cartItem.amount,
    }
  })
  return positions
}

export function prepareOrder(details, cartItems) {
  let positions = getPositionsFromCart(cartItems)
  return {
    personName: details.name,
    address: details.address,
    phoneNumber: details.phoneNumber,
    comment: details.comment,
    positions,
  }
}
