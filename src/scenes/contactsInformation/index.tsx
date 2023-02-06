import Reactfrom, { useContext, useEffect, useState } from "react";
import { IMockDataContacts } from "../../@types";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import GridContactCard from "./GridContactCard";

const initialUnactiveColumn = [
  { id: "id", title: "ID", isActive: true },
  { id: "registerId", title: "Register ID", isActive: true },
  { id: "name", title: "Name", isActive: true },
  { id: "age", title: "Age", isActive: true },
  { id: "phone", title: "Phone Number", isActive: true },
  { id: "email", title: "Email", isActive: true },
  { id: "address", title: "Address", isActive: true },
  { id: "city", title: "City", isActive: true },
  { id: "zipCode", title: "Zip Code", isActive: true },
];

const ContactsInformation = ({}) => {
  const [columnsIsOpen, setcolumnsIsOpen] = useState(false);
  const [unactiveColumn, setUnActiveColumn] = useState(initialUnactiveColumn);

  const columnsHandler = () => {
    setcolumnsIsOpen(!columnsIsOpen);
  };
  const togleVisibleColumn = (id: string) => {
    const updateUnactive = unactiveColumn.map((item) => {
      if (item.id == id) {
        return { ...item, isActive: !item.isActive };
      }
      return item;
    });

    setUnActiveColumn(updateUnactive);
  };

  useEffect(() => {
    console.log(unactiveColumn);
  }, [unactiveColumn]);

  return (
    <div>
      <Header title="Contacts Information" subTitle="contacts information" />
      <div className="flex my-5 space-x-4 ">
        <div>
          <p className="cursor-pointer" onClick={columnsHandler}>
            Columns
          </p>
          {columnsIsOpen && (
            <div className="absolute top-[190px]  w-72 p-4 bg-grey-700">
              <div>
                {unactiveColumn.map((item, i) => {
                  return (
                    <div key={item.id} className="flex justify-between">
                      {item.title}
                      <button
                        className={
                          item.isActive === true
                            ? `text-greenAccent-400`
                            : `text-redAccent-400`
                        }
                        onClick={() => togleVisibleColumn(item.id)}
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
      <div className="grid grid-cols-[40px_80px_minmax(200px,_1fr)_80px_minmax(80px,_1fr)_minmax(230px,_1fr)_minmax(350px,_1fr)_150px_70px] bg-blueAccent-600 rounded-t-lg px-1 py-2 `">
        {unactiveColumn.map((section, i) => {
          return (
            <div className={`${section.isActive ? "block" : "hidden"}`} key={i}>
              {section.title}
            </div>
          );
        })}
      </div>
      <div>
        {mockDataContacts.map((item: IMockDataContacts) => {
          return (
            <GridContactCard
              key={item.id}
              id={item.id}
              registrarId={item.registrarId}
              name={item.name}
              age={item.age}
              phone={item.phone}
              email={item.email}
              address={item.address}
              city={item.city}
              zipCode={item.zipCode}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContactsInformation;
