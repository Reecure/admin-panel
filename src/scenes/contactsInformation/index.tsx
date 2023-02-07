import { useState } from "react";
import { IMockDataContacts } from "../../@types";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import {
  selectColumn,
  toggleIsActive,
} from "../../redux/ContactsInformatioSlice/ContactsColumnsToggle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import GridContactCard from "./GridContactCard";

const ContactsInformation = ({}) => {
  const [columnsIsOpen, setcolumnsIsOpen] = useState(false);

  const columns = useAppSelector(selectColumn);
  const dispatch = useAppDispatch();

  console.log(columns);

  const columnsHandler = () => {
    setcolumnsIsOpen(!columnsIsOpen);
  };

  return (
    <div>
      <Header title="Contacts Information" subTitle="contacts information" />
      <div className="flex my-5 space-x-4 ">
        <div>
          <p className="cursor-pointer" onClick={columnsHandler}>
            Columns
          </p>
          {columnsIsOpen && (
            <div className="absolute top-[190px] p-4 bg-grey-700">
              <div>
                {columns.map((item) => {
                  return (
                    <div key={item.id} className="flex justify-between">
                      {item.title}
                      <button
                        className={
                          item.isActive === true
                            ? `text-greenAccent-400`
                            : `text-redAccent-400`
                        }
                        onClick={() => dispatch(toggleIsActive(item.id))}
                      >
                        toggle
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div>
          <p className="cursor-pointer">Filters</p>
        </div>
      </div>
      <div className="grid grid-cols-9  bg-blueAccent-600 rounded-t-lg px-1 py-2 `">
        {columns.map((section, i) => {
          return (
            <div className={`${section.isActive ? "block" : "hidden"}`} key={i}>
              {section.title}
            </div>
          );
        })}
      </div>
      <div>
        {mockDataContacts.map((item: IMockDataContacts) => {
          return <GridContactCard key={item.id} data={{ ...item }} />;
        })}
      </div>
    </div>
  );
};

export default ContactsInformation;
