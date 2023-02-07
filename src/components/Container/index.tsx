import React, { Children, FC } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectTheme } from "../../redux/ToggleThemeSlice/ToggleThemeSlice";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Container: FC<Props> = ({ children }) => {
  const theme = useAppSelector(selectTheme);
  return (
    <div
      className={` min-h-screen ${
        theme === "dark"
          ? "bg-primary-600 text-primary-100"
          : "bg-primary-100 text-primary-800"
      }`}
    >
      {children}
    </div>
  );
};

export default Container;
