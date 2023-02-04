import React, { FC } from "react";

type Props = {
  title: string;
  subTitle: string;
};

const Header: FC<Props> = ({ title, subTitle }) => {
  return (
    <div>
      <h2 className="uppercase font-bold text-primary-100">{title}</h2>
      <p className="text-greenAccent-600">{subTitle}</p>
    </div>
  );
};

export default Header;
