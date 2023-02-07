import React, { FC } from "react";
import { IMockDataContacts } from "../../@types";
import { mockDataContacts } from "../../data/mockData";
import { selectColumn } from "../../redux/ContactsInformatioSlice/ContactsColumnsToggle";
import { useAppSelector } from "../../redux/hooks";

interface Props {
  data: IMockDataContacts;
}

const GridContactCard: FC<Props> = ({ data }) => {
  const columns = useAppSelector(selectColumn);

  return (
    <div className="grid grid-cols-9 gap-[6px] p-3 border-b-[1px] border-primary-100">
      <div className={`${columns[0].isActive ? "block" : "hidden"}`}>
        {data.id}
      </div>
      <div className={`${columns[1].isActive ? "block" : "hidden"}`}>
        {data.registrarId}
      </div>
      <div className={`${columns[2].isActive ? "block" : "hidden"}`}>
        {data.name}
      </div>
      <div className={`${columns[3].isActive ? "block" : "hidden"}`}>
        {data.age}
      </div>
      <div className={`${columns[4].isActive ? "block" : "hidden"}`}>
        {data.phone}
      </div>
      <div className={`${columns[5].isActive ? "block" : "hidden"}`}>
        {data.email}
      </div>
      <div className={`${columns[6].isActive ? "block" : "hidden"}`}>
        {data.address}
      </div>
      <div className={`${columns[7].isActive ? "block" : "hidden"}`}>
        {data.city}
      </div>
      <div className={`${columns[8].isActive ? "block" : "hidden"}`}>
        {data.zipCode}
      </div>
    </div>
  );
};

export default GridContactCard;
