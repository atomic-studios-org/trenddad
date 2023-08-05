import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51L34nrJ0Tu9paWkW9sF0gCPGB55l3fncgRlFJmF2Lcr4xEUdCMuUtQnYang1GsxdZAmw9AaTC6vHgJHPhNMAsDDA000WqYNd73",
  { apiVersion: "2022-11-15" }
);

export default defineEventHandler(async (event) => {
  const { orderId, referenceId } = await readBody(event);
  const response = await calculatePayment(orderId);

  if (response.client_reference_id === referenceId._value) {
    console.log("true");
    return { payment: response };
  } else {
    console.log("false");
    return { payment: false };
  }
});

const calculatePayment = async (orderId: string) => {
  const response = await stripe.checkout.sessions.retrieve(orderId, {
    expand: ["line_items"],
  });
  return response;
};
