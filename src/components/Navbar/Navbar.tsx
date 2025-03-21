"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, } from "../ui/NavbarMenu";
import { cn } from "../../lib/utils";

export function NavbarMenu() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-lg mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Insurance">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/life-insurance">Life Insurance</HoveredLink>
            <HoveredLink href="/health-insurance">Health Insurance</HoveredLink>
            <HoveredLink href="/home-insurance">Home Insurance</HoveredLink>
            <HoveredLink href="/travel-insurance">Travel Insurance</HoveredLink>
            <HoveredLink href="/disability-insurance">Disability Insurance</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Support">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contact-agent">Contact an Agent</HoveredLink>
            <HoveredLink href="/customer-service">Customer Service</HoveredLink>
            <HoveredLink href="/support">24/7 Support</HoveredLink>
            <HoveredLink href="/offices">Find a Branch Office</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Company Info">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Why Choose Us?</HoveredLink>
            <HoveredLink href="/missions">Our Mission</HoveredLink>
            <HoveredLink href="/careers">Careers</HoveredLink>
            <HoveredLink href="/partnership">Partner with Us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Legal">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/terms-conditions">Terms & Conditions</HoveredLink>
            <HoveredLink href="/privacy-policy">Privacy Policy</HoveredLink>
            <HoveredLink href="/disclosures">Disclosures</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
