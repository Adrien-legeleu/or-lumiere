"use client";
import {
  HoveredLink,
  Menu,
  ProductItem,
} from "@/components/acerternity/navbar-menu";
import { ModeToggle } from "@/components/ModeToggle";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { MenuItem } from "../../components/acerternity/navbar-menu";

export const Header = () => {
  return (
    <div className="w-full py-4 px-8 flex items-center justify-between">
      <h1>Or&Lumière</h1>
      <div>
        <Navbar className="top-2" />
      </div>
      <div>
        <ModeToggle />
      </div>
    </div>
  );
};

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/presentation">Présentation</HoveredLink>
            <HoveredLink href="/main-products">Produits phares</HoveredLink>
            <HoveredLink href="/notice">Ce qu'ils disent sur nous</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Collections">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Collier"
              href="https://algochurn.com"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Bagues"
              href="https://tailwindmasterkit.com"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Bracelets"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="Montres"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="A propos de nous">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/history">histoire</HoveredLink>
            <HoveredLink href="/commitments">Engagements</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
