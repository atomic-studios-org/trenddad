import Stripe from "stripe";

const stripe = new Stripe(
  "sk_test_51L34nrJ0Tu9paWkW9sF0gCPGB55l3fncgRlFJmF2Lcr4xEUdCMuUtQnYang1GsxdZAmw9AaTC6vHgJHPhNMAsDDA000WqYNd73",
  { apiVersion: "2022-11-15" }
);

export default defineEventHandler(async (event) => {
  const { referenceId, email } = await readBody(event);
 
  const { userList, response } = await calculatePayments(referenceId);

  return { users: userList, response: response.data };
});

const calculatePayments = async (referenceId: any) => {
 
  const response = await stripe.checkout.sessions.list();
  const userList = response.data.filter(
    (item) =>
      item.client_reference_id === referenceId 
      && item.payment_status === "paid"
  );
  return { userList, response };
};
