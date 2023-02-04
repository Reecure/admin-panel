import Reactfrom from "react";
import { IMockDataContacts } from "../../@types";
import { mockDataContacts } from "../../data/mockData";
import GridContactCard from "./GridContactCard";

const ContactsInformation = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-[40px_80px_minmax(200px,_1fr)_80px_minmax(80px,_1fr)_minmax(230px,_1fr)_minmax(350px,_1fr)_150px_70px] bg-blueAccent-600 rounded-t-lg px-1 py-2 `">
        <div>
          <p>ID</p>
        </div>
        <div>
          <p>Register ID</p>
        </div>
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Age</p>
        </div>
        <div>
          <p>Phone Number</p>
        </div>
        <div>
          <p>Email</p>
        </div>
        <div>
          <p>Address</p>
        </div>
        <div>
          <p>City</p>
        </div>
        <div>
          <p>Zip Code</p>
        </div>
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
