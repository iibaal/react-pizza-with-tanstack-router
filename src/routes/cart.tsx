import { createFileRoute } from "@tanstack/react-router";
import Cart from "../features/cart/Cart";

export const Route = createFileRoute("/cart")({
  component: Cart,
});
