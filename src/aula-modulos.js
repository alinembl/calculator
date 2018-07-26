/**
 * e-commerce.js
 */

/** buy */
export function buy (products, creditCard) {
  if (!Array.isArray(products) || products.length === 0) {
    throw new Error("buy() requires a list of products.")
  }

  if (typeof creditCard !== 'object') {
    throw new Error("buy() requires a credit card.")
  }

  let orderAmount = 0

  for (var i = 0; i < products.length; i++) {
    const product = products[i]

    orderAmount += product.price
  }

  // process credit card
  console.log(`Processing credit card: ${JSON.stringify(creditCard)}`)

  // for now, credit card processing will always be successful
  const result = true

  if (!result) {
    throw new Error("Unable to process credit card.")
  }

  // returns an order object
  return {
    id: '123456789',
    status: 'ORDER_STATUS_PAYMENT_APPROVED'
  }
}
