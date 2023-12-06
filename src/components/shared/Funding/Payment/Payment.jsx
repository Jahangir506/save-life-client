import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);
const Payment = ({taka}) => {
    console.log(taka);
  return (
    <>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm taka={taka}/>
        </Elements>
      </div>
    </>
  );
};

export default Payment;
