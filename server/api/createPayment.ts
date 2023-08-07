import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51L34nrJ0Tu9paWkW9sF0gCPGB55l3fncgRlFJmF2Lcr4xEUdCMuUtQnYang1GsxdZAmw9AaTC6vHgJHPhNMAsDDA000WqYNd73",
  { apiVersion: "2022-11-15" }
);

export default defineEventHandler(async (event) => {
  const { referenceId, email, allitems } = await readBody(event);
  const response = await createPayment(referenceId, email, allitems);
  return { data: response.url };
});

const createPayment = async (referenceId: string, email: string, allitems: number[]) => {
  const items = []
  for(let i = 0; i < allitems.length; i++){
    items.push(
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "item",
          },
          unit_amount: allitems[i] * 100,
        },
        quantity: 1,
      })
  }
  console.log(items)
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
