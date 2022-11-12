import React, { FC, PropsWithChildren } from "react";
import { ReactComponent as WarningIcon } from "@app/assets/icons/warning.svg";
import { ReactComponent as InfoIcon } from "@app/assets/icons/info.svg";
import clsx from "clsx";

type ShowInfoProps = {
  type: "error" | "info";
};

export const ShowInfo: FC<ShowInfoProps & PropsWithChildren> = ({
  type,
  children,
}) => {
  const bgColors = clsx(
    "rounded-t-2xl h-16 flex justify-center items-center mb-2",
    {
      "bg-red-500": type === "error",
      "bg-blue-500": type === "info",
    }
  );

  const showIcon = {
    error: <WarningIcon className="text-white h-12" />,
    info: <InfoIcon className="text-white h-12" />,
  };

  return (
    <div className="flex justify-center">
      <div className="shadow-xl rounded-2xl w-64">
        <div className={bgColors}>{showIcon[type]}</div>
        <div className="bg-white text-center pb-2 rounded-b-2xl">
          {children}
        </div>
      </div>
    </div>
  );
};
