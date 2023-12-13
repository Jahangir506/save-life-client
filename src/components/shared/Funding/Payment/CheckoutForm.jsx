import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import useFundAmount from "../../../../hooks/useFundAmount";

const CheckoutForm = () => {
  const [fundAmount] = useFundAmount();
  const axiosSecure = useAxiosSecure();
  const [err, setErr] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const { user } = useAuth();
  const totalAmount = fundAmount.reduce(
    (total, totalAmount) => total + totalAmount.amount,
    0
  );

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { fund: totalAmount })
      .then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalAmount]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("payment error", error);
      setErr(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setErr("");
    }

    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmErr) {
      console.log("confirm error", confirmErr);
    } else {
      console.log("payment intent", paymentIntent);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="max-w-3xl mx-auto"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <p className="text-red-500 bg-red-50 text-center mt-10 mb-3">{err}</p>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            disabled={!stripe}
            className="btn bg-red-500 text-white w-full hover:bg-black rounded-none border-none"
          >
            Payment
          </button>
        </div>
      </form>
    </>
  );
};
export default CheckoutForm;


