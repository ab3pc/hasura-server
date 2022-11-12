import React, { FC, PropsWithChildren } from "react";

type FooterLinkProps = {
  type: string;
};

export const FooterLink: FC<FooterLinkProps & PropsWithChildren> = ({ children, type }) => {
  return (
      <li>
        <a
          className="mb-2 font-bold ext-sm text-gray-400 inline-block hover:text-gray-300 hover:underline"
          href={type}
        >
          {children}
        </a>
      </li>
  );
};
