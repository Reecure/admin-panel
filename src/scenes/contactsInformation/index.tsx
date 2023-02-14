import { useEffect, useState } from "react";
import { IMockDataContacts } from "../../@types";
import Header from "../../components/Header";
import { mockDataContacts } from "../../data/mockData";
import {
  FilteringValue,
  selectColumn,
  selectedColumn,
  selectedColumnOpt,
  selectedFilter,
  selectedFilterOption,
  toggleIsActive,
  valueForFiltering,
} from "../../redux/ContactsInformatioSlice/ContactsColumnsToggle";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import GridContactCard from "./GridContactCard";

const ContactsInformation = () => {
  const [columnsIsOpen, setcolumnsIsOpen] = useState(false);
  const [filtersIsOpen, setFiltersIsOpen] = useState(false);
  const [visibleFilterColumns, setVisibleFilterColumns] = useState(false);
  const [visibleFilterOptions, setVisibleFilterOptions] = useState(false);

  const columns = useAppSelector(selectColumn);
  const selectedColumnOption = useAppSelector(selectedColumnOpt);
  const selectedOption = useAppSelector(selectedFilterOption);
  const value = useAppSelector(FilteringValue);
  const dispatch = useAppDispatch();

  const columnsHandler = () => {
    setcolumnsIsOpen(!columnsIsOpen);
    setFiltersIsOpen(false);
  };
  const filterHandler = () => {
    setFiltersIsOpen(!filtersIsOpen);
    setcolumnsIsOpen(false);
  };

  const FilterColumnsHandler = () => {
    setVisibleFilterColumns(!visibleFilterColumns);
  };

  const FilterOptionsHandler = () => {
    setVisibleFilterOptions(!visibleFilterOptions);
  };

  const filterOptions = (data: IMockDataContacts) => {
    if (value === "") {
      return data;
    }
    if (
      selectedColumnOption === "age" ||
      selectedColumnOption === "id" ||
      selectedColumnOption === "registerId"
    ) {
      console.log("sda");

      switch (selectedOption) {
        case ">":
          //@ts-ignore
          return data[selectedColumnOption] > Number(value);
        case "=":
          //@ts-ignore
          return data[selectedColumnOption] === Number(value);
        case "<":
          //@ts-ignore
          return data[selectedColumnOption] < Number(value);
      }
    } else {
      //@ts-ignore
      return data[selectedColumnOption].includes(value);
    }
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
          <p className="cursor-pointer" onClick={filterHandler}>
            Filters
          </p>
          {filtersIsOpen && (
            <div className="absolute top-[190px] p-4 bg-grey-700">
              <div className="flex space-x-14">
                <div>
                  <p className="cursor-pointer">Columns</p>
                  <div className="flex justify-between">
                    <div>{selectedColumnOption}</div>
                    <div
                      className="cursor-pointer"
                      onClick={FilterColumnsHandler}
                    >
                      {">"}
                    </div>
                  </div>
                  {visibleFilterColumns && (
                    <ul>
                      {columns.map((item) => {
                        return (
                          <li
                            key={item.id}
                            onClick={(e) => dispatch(selectedColumn(item.id))}
                            className="cursor-pointer"
                          >
                            {item.title}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </div>
                <div>
                  <p className="cursor-pointer">Options</p>
                  <div className="flex justify-between">
                    <div>{selectedOption}</div>
                    <div
                      className="cursor-pointer"
                      onClick={FilterOptionsHandler}
                    >
                      {">"}
                    </div>
                  </div>
                  {visibleFilterOptions && (
                    <ul>
                      <li
                        onClick={(e) =>
                          dispatch(selectedFilter(e.currentTarget.innerText))
                        }
                        className="cursor-pointer"
                      >{`>`}</li>
                      <li
                        onClick={(e) =>
                          dispatch(selectedFilter(e.currentTarget.innerText))
                        }
                        className="cursor-pointer"
                      >{`=`}</li>
                      <li
                        onClick={(e) =>
                          dispatch(selectedFilter(e.currentTarget.innerText))
                        }
                        className="cursor-pointer"
                      >{`<`}</li>
                    </ul>
                  )}
                </div>
                <div>
                  <p>Value </p>
                  <p>
                    <input
                      onChange={(e) =>
                        dispatch(valueForFiltering(e.target.value))
                      }
                      className={"cursor-pointer text-lightPrimary-100"}
                      type="text"
                    />
                  </p>
                </div>
              </div>
            </div>
          )}
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
        {mockDataContacts
          .filter((item) => {
            return filterOptions(item);
          })
          .map((item: IMockDataContacts) => {
            return <GridContactCard key={item.id} data={{ ...item }} />;
          })}
      </div>
    </div>
  );
};

export default ContactsInformation;
