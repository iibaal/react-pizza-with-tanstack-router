import { createFileRoute } from "@tanstack/react-router";
import Menu from "../features/menu/Menu";

export const Route = createFileRoute("/menu")({
  component: Menu,
});
