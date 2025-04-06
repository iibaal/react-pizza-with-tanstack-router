import { createFileRoute } from "@tanstack/react-router";
import Home from "../ui/Home";

export const Route = createFileRoute("/")({
  component: Home,
});
