import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  darkTheme,
  lightTheme,
  selectTheme,
} from "../../redux/ToggleThemeSlice/ToggleThemeSlice";
import {
  BsSearch,
  BsFillMoonFill,
  BsFillSunFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TbBellRinging } from "react-icons/tb";

type Props = {};

const Topbar = (props: Props) => {
  const theme = useAppSelector(selectTheme);

  const dispatch = useAppDispatch();
  const HandleToggleTheme = () => {
    theme === "light" ? dispatch(darkTheme()) : dispatch(lightTheme());
  };
  return (
    <div className=" py-6">
      <div className="flex justify-between ">
        <div className="flex bg-primary-400 p-1 rounded-md">
          <input
            type="text"
            placeholder="Search..."
            className="h-6 w-32 p-1  bg-primary-400 focus-visible:outline-none "
          />
          <BsSearch className="ml-1 mt-1" />
        </div>
        <div className="space-x-3">
          <button onClick={HandleToggleTheme}>
            {theme === "dark" ? (
              <BsFillMoonFill className="w-5 h-5" />
            ) : (
              <BsFillSunFill className="w-5 h-5" />
            )}
          </button>
          <button>
            <TbBellRinging className="w-5 h-5" />
          </button>
          <button>
            <FiSettings className="w-5 h-5" />
          </button>
          <button>
            <BsFillPersonFill className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
