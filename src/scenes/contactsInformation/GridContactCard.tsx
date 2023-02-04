import React, { FC } from "react";
import { IMockDataContacts } from "../../@types";

const GridContactCard: FC<IMockDataContacts> = ({
  address,
  age,
  city,
  email,
  id,
  name,
  phone,
  registrarId,
  zipCode,
}) => {
  return (
    <div className="grid grid-cols-[40px_80px_minmax(200px,_1fr)_80px_minmax(80px,_1fr)_minmax(230px,_1fr)_minmax(350px,_1fr)_150px_70px] px-2 py-3 border-b-[1px] border-grey-100">
      <div>
        <p>{id}</p>
      </div>
      <div>
        <p>{registrarId}</p>
      </div>
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
        <p>{address}</p>
      </div>
      <div>
        <p>{city}</p>
      </div>
      <div>
        <p>{zipCode}</p>
      </div>
    </div>
  );
};

export default GridContactCard;
