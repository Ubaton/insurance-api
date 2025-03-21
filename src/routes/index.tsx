import { createFileRoute } from "@tanstack/react-router";
import InsuranceOptions from "../components/Home/InsuranceForm";
import NavbarMenu from "../components/Navbar/Navbar";
import TextGenerate from "../components/GenerativeText/TextGenerate";
import MovingCards from "../components/MovingCards/MovingCards";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
  <div className="flex flex-col pt-20 p-4 items-center bg-gray-900 min-h-screen w-full space-y-8">
    <NavbarMenu />
    <div className="pl-36 pr-36 p-4">
      <TextGenerate/>
    </div>
    <InsuranceOptions />
    <div>
      <MovingCards />
    </div>
  </div>
  );
}
