import React, { FC } from "react";
import { IMockDataInvoices } from "../../@types";

type Props = {};

const GridInvoiceCard: FC<IMockDataInvoices> = ({
  id,
  cost,
  date,
  email,
  name,
  phone,
}) => {
  return (
    <div className="grid grid-cols-[40px_60px_minmax(200px,_1fr)_minmax(120px,_1fr)_minmax(300px,_1fr)_minmax(130px,_1fr)_100px] px-2 py-3 border-b-[1px] border-grey-100 `">
      <div>
        <input type="checkbox" />
      </div>
      <div>
        <p>{id}</p>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{phone}</p>
      </div>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <p>{cost}</p>
      </div>
      <div>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default GridInvoiceCard;
