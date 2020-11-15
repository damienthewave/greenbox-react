export const collectionTypes = {
    WEIGHT: 'WEIGHT',
    QUANTITY: 'QUANTITY'
}

export function itemToUnit(item) {
    switch (item.collectionType) {
        case collectionTypes.QUANTITY:
            return "pc."
        case collectionTypes.WEIGHT:
            return "kg"
        default:
            return "";
    }
}

export function calculateSubtotal(item, amount) {
    return (item.price * amount).toFixed(2)
}

export function getSubtotal(item, amount) {
    return amount == 0 ? "" : "$" + calculateSubtotal(item, amount)
}

export function calculateTotal(cartItems){
    return cartItems
                .map(cartItem => calculateSubtotal(cartItem.item, cartItem.amount))
                .reduce((a, b) => +a + +b, 0.0)
                .toFixed(2)
}

export function getStep(item) {
    return item.collectionType === "WEIGHT" ? 0.1 : 1
}

//for validating further on
export function isValid(item, amount) {
    if (item.collectionType === "QUANTITY") {
        return Number.isInteger(amount)
    } else return true
}