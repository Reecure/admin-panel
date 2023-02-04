import React from "react";
import { Link } from "react-router-dom";
import cat from "../../assets/1.jpg";
import {
  AiOutlineTeam,
  AiOutlineCalendar,
  AiOutlinePieChart,
  AiOutlineRise,
} from "react-icons/ai";
import { MdOutlineContacts } from "react-icons/md";
import { FaFileInvoice, FaQuestionCircle } from "react-icons/fa";
import {
  BsFillBarChartFill,
  BsGeoAlt,
  BsFillPersonFill,
  BsFillHouseFill,
} from "react-icons/bs";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="z-20 fixed p-6 top-0 lg:left-0 h-screen w-60 lg:w-72 bg-primary-400 shadow-2xl overflow-y-auto">
      <div className="flex justify-between">
        <h2>ADMINS</h2>
        <div className="space-y-1 mt-2">
          <div className="w-5 h-0.5 bg-grey-100"></div>
          <div className="w-5  h-0.5 bg-grey-100"></div>
          <div className="w-5  h-0.5 bg-grey-100"></div>
        </div>
      </div>
      <div className="mt-4">
        <img className="mx-auto w-20 h-20 rounded-full " src={cat} />
        <h4 className="text-center font-bold">OG BUDA</h4>
        <h5 className="text-center text-greenAccent-600">VP Fancy Admin</h5>
      </div>
      <div className="text-grey-400 mt-3 space-y-4 ">
        <Link className="text-blueAccent-600" to="/">
          <div className="flex space-x-4 ">
            <span>
              <BsFillHouseFill />
            </span>
            <p className="-mt-1 ">Dashboard</p>
          </div>
        </Link>
        <div className="flex flex-col space-y-2 space-x-3 ">
          <p className=" mb-3 text-sm">Data</p>
          <Link to="/manageTeam">
            <div className="flex space-x-2">
              <span>
                <AiOutlineTeam />
              </span>
              <p className="-mt-1">Manage Team</p>
            </div>
          </Link>
          <Link to="/contactsInformation">
            <div className="flex space-x-2">
              <span>
                <MdOutlineContacts />
              </span>
              <p className="-mt-1">Contacts Information</p>
            </div>
          </Link>
          <Link to="/invoicesBalances">
            <div className="flex space-x-2">
              <span>
                <FaFileInvoice />
              </span>
              <p className="-mt-1">Invoices Balances</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-2 space-x-3">
          <p className="-ml-1 mb-3  text-sm">Pages</p>
          <Link to="/profileForm">
            <div className="flex space-x-2">
              <span>
                <BsFillPersonFill />
              </span>
              <p className="-mt-1">Profile Form</p>
            </div>
          </Link>
          <Link to="/calendar">
            <div className="flex space-x-2">
              <span>
                <AiOutlineCalendar />
              </span>
              <p className="-mt-1"> Calendar</p>
            </div>
          </Link>
          <Link to="/faq">
            <div className="flex space-x-2">
              <span>
                <FaQuestionCircle />
              </span>
              <p className="-mt-1">Faq Page</p>
            </div>
          </Link>
        </div>
        <div className="flex flex-col space-y-2 space-x-3 ">
          <p className="-ml-1 mb-3 text-sm">Charts</p>
          <Link to="/barChart">
            <div className="flex space-x-2">
              <span>
                <BsFillBarChartFill />
              </span>
              <p className="-mt-1">Bar Chart</p>
            </div>
          </Link>
          <Link to="/pieChart">
            <div className="flex space-x-2">
              <span>
                <AiOutlinePieChart />
              </span>
              <p className="-mt-1"> Pie Chart</p>
            </div>
          </Link>
          <Link to="/lineChart">
            <div className="flex space-x-2">
              <span>
                <AiOutlineRise />
              </span>
              <p className="-mt-1">Line Chart</p>
            </div>
          </Link>
          <Link to="/geographyChart">
            <div className="flex space-x-2">
              <span>
                <BsGeoAlt />
              </span>
              <p className="-mt-1">Geography Chart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
