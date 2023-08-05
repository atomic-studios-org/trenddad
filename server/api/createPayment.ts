import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51L34nrJ0Tu9paWkW9sF0gCPGB55l3fncgRlFJmF2Lcr4xEUdCMuUtQnYang1GsxdZAmw9AaTC6vHgJHPhNMAsDDA000WqYNd73",
  { apiVersion: "2022-11-15" }
);

export default defineEventHandler(async (event) => {
  const { referenceId, email } = await readBody(event);
  const response = await createPayment(referenceId, email);
  return { data: response.url };
});

const createPayment = async (referenceId: string, email: string) => {
  const response = await stripe.checkout.sessions.create({
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "eur",
          },
          display_name: "Free shipping",
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
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "testitem",
          },
          unit_amount: 100 * 100,
        },
        quantity: 1,
      },
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: "testitemtwo",
          },
          unit_amount: 300 * 100,
        },
        quantity: 2,
      },
    ],
    success_url: "http://localhost:3000/success",
  });
  return response;
};
