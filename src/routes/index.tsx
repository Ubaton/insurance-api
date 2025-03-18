import { createFileRoute } from "@tanstack/react-router";
import InsuranceOptions from "../components/Home/InsuranceForm";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flexp-2 items-center justify-center bg-zinc-800 h-screen">
      <InsuranceOptions />
    </div>
  );
}
