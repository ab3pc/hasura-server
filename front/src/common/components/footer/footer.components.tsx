import React from "react";
import { FooterLink } from "./footer-link/footer-link.components";

export const Footer = () => {
  return (
    <div className="bg-gray-900 mt-auto">
      <div className="pt-12 px-12">
        <h2 className="mb-4 text-zinc-500 font-bold text-sm uppercase">
          Contacts
        </h2>
        <ul className="mb-8">
          <FooterLink type='tel:3800441234567'>044 123 45 67</FooterLink>
          <FooterLink type='mailto:info@qwerty.com'>info@qwerty.com</FooterLink>
        </ul>
      </div>
      <div className="h-px bg-zinc-500"></div>
      <div className="pt-8 pb-12 px-12 transition-all">
        <div className="">
        <h2 className="text-white font-semibold text-xl">🍕Pizza</h2>
        </div>
        
      </div>
    </div>
  );
};
