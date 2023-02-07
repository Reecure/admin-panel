import React from "react";
import Header from "../../components/Header";
import { mockDataTeam } from "../../data/mockData";
import { IMockDataTeam } from "../../@types";
import GridCard from "./GridCard";

type Props = {};

const ManageTeam = (props: Props) => {
  return (
    <div className="">
      <Header title="team" subTitle="Managing the Team Members" />
      <div className="overflow-auto mt-10 grid grid-cols-[40px_40px_minmax(200px,_1fr)_80px_minmax(250px,_1fr)_minmax(250px,_1fr)_minmax(150px,_1fr)] p-3 justify-between bg-blueAccent-700 text-primary-100 rounded-t-lg">
        <div>
          <input type="checkbox" name="" id="" />
        </div>
        <div>
          <p>ID</p>
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
        <p>Access Level</p>
      </div>
      <div className="bg-primary-400">
        {mockDataTeam.map((item: IMockDataTeam) => {
          return (
            <GridCard
              key={item.id}
              id={item.id}
              name={item.name}
              age={item.age}
              phone={item.phone}
              email={item.email}
              access={item.access}
            ></GridCard>
          );
        })}
      </div>
    </div>
  );
};

export default ManageTeam;
