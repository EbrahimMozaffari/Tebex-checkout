import Fastify from "fastify";
import { round, uuid } from "./util.js";
import basket from "./basket.js";

const fastify = Fastify();

// Get basket endpoint
fastify.get("/api/basket", () => {
  return {
    id: "1",
    products: [
      { name: "Medium Booster", price: 9.99, image: "medium_booster.png", quantity: 1 },
      { name: "Small Coins", price: 4.99, image: "small_coins.png", quantity: 1 },
    ],
    couponCode: null,
    subTotal: 14.98,
    salesTax: 3.00,
    total: 17.98,
  };
});

// Checkout endpoint
fastify.post(
  "/api/basket/:id/checkout",
  {
    schema: {
      body: {
        type: "object",
        required: [
          "email",
          "cardNumber",
          "cardExpiry",
          "cardCvc",
          "postalCode",
          "nameOnCard",
        ],
        properties: {
          email: { type: "string" },
          cardNumber: { type: "string" },
          cardExpiry: { type: "string" },
          cardCvc: { type: "string" },
          postalCode: { type: "string" },
          nameOnCard: { type: "string" },
        },
      },
    },
  },
  (request, reply) => {
    if (request.params.id !== basket.id) {
      reply.code(404);
      return { success: false, message: "Basket not found" };
    }

    return { success: true, transactionId: `tbx-${uuid()}` };
  }
);

fastify.post(
  "/api/basket/:id/coupon",
  {
    schema: {
      body: {
        type: "object",
        required: ["code"],
      },
      properties: {
        code: { type: "string" },
      },
    },
  },
  (request, reply) => {
    if (request.params.id !== basket.id) {
      reply.code(404);
      return { success: false, message: "Basket not found" };
    }

    if (request.body.code.toUpperCase() !== "25OFF") {
      reply.code(400);
      return { success: false, message: "Coupon code not found" };
    } else {
      const subTotal = basket.subTotal * 0.75;
      const salesTax = subTotal * 0.2;
      const total = subTotal + salesTax;

      return {
        ...basket,
        couponCode: request.body.code,
        subTotal: round(subTotal, 2),
        salesTax: round(salesTax, 2),
        total: round(total, 2),
      };
    }
  }
);

// Run the server!
try {
  await fastify.listen({ port: 3001 });
  console.log("Server listening on port 3001, Adventure awaits!");
} catch (err) {
  console.error(err);
  process.exit(1);
}
