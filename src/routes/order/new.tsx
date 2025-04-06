import { createFileRoute } from "@tanstack/react-router";
import CreateOrder from "../../features/order/CreateOrder";

export const Route = createFileRoute("/order/new")({
  component: CreateOrder,
});
