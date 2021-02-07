import { Mutation, Arg, Resolver } from "type-graphql";
import Stripe from "stripe";
@Resolver()
export class Charge {
  @Mutation(() => Boolean)
  async charge(@Arg("id") id: string, @Arg("amount") amount: number) {
    const stripe = new Stripe(
      "sk_test_51I0hdrLCnusGqFH6t7kgt9tSdgHR0mfoIrnPv4Ey4PeyoHNHwIjhA72eQNDZd8gYnEqT7ucdIzzUlqkFsjzMyMGx00phnxunYM",
      { apiVersion: "2020-08-27" }
    );
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "PHONE ORDERS ",
        payment_method: id,
      });

      console.log(payment.client_secret);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}
