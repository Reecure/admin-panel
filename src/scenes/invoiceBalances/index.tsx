import Reactfrom from "react";
import { IMockDataInvoices } from "../../@types";
import { mockDataContacts, mockDataInvoices } from "../../data/mockData";
import GridInvoiceCard from "./GridInvoiceCard";

const InvoiceBalances = ({}) => {
  return (
    <div>
      <div className="grid grid-cols-[40px_60px_minmax(200px,_1fr)_minmax(120px,_1fr)_minmax(300px,_1fr)_minmax(130px,_1fr)_100px] bg-blueAccent-600 rounded-t-lg px-1 py-2 `">
        <div>
          <input type="checkbox" />
        </div>
        <div>
          <p>ID</p>
        </div>
        <div>
          <p>Name</p>
        </div>
        <div>
          <p>Phone Number</p>
        </div>
        <div>
          <p>Email</p>
        </div>
        <div>
          <p>Cost</p>
        </div>
        <div>
          <p>Date</p>
        </div>
      </div>
      <div>
        {mockDataInvoices.map((item: IMockDataInvoices) => {
          return (
            <GridInvoiceCard
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
              email={item.email}
              cost={item.cost}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default InvoiceBalances;
