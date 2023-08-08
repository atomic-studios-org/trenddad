import Stripe from "stripe";
const stripe = new Stripe(
  process.env.STRIPE_TEST_KEY!,
  { apiVersion: "2022-11-15" }
);

export default defineEventHandler(async (event) => {
  const { referenceId, email, allitems } = await readBody(event);
  const response = await createPayment(referenceId, email, allitems);
  return { data: response.url };
});

const createPayment = async (referenceId: string, email: string, allitems: number[]) => {
 
    const cartItemsAll = await $fetch("/api/getCartItems", {
        method: "POST",
        body: {
          cartItems: allitems,
        },
      })

  const allPrices = cartItemsAll?.data.map((item) => {
    return item[0].price
  })
 
  const items = []
  for(let i = 0; i < allPrices.length; i++){
    items.push(
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "item",
          },
          unit_amount: allPrices[i] * 100,
        },
        quantity: 1,
      })
  }
  const response = await stripe.checkout.sessions.create({
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 4.50 * 100,
            currency: "eur",
          },
          display_name: "Estimated delivery",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 2,
            },
            maximum: {
              unit: "business_day",
              value: 5,
            },
          },
        },
      },
    ],
    mode: "payment",
    client_reference_id: referenceId,
    customer_email: email,
    line_items: items,
    success_url: `${process.env.AUTH_ORIGIN}/success`,
  });
  return response;
};
