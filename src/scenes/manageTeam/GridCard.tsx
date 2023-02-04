import React, { FC } from "react";
import { IMockDataTeam } from "../../@types";

const GridCard: FC<IMockDataTeam> = ({
  id,
  access,
  age,
  email,
  name,
  phone,
}) => {
  return (
    <div
      className={`grid grid-cols-[40px_40px_minmax(200px,_1fr)_80px_minmax(250px,_1fr)_minmax(250px,_1fr)_minmax(150px,_1fr)] p-3 border-b-[1px] border-primary-100`}
    >
      <div>
        <input className="" type="checkbox" />
      </div>
      <div>{id}</div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{age}</p>
      </div>
      <div>
        <p>{phone}</p>
      </div>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <p>{access}</p>
      </div>
    </div>
  );
};

export default GridCard;
