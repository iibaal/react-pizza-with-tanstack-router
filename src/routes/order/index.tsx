import { createFileRoute } from "@tanstack/react-router";
import Order from "../../features/order/Order";

export const Route = createFileRoute("/order/")({
  component: Order,
});
