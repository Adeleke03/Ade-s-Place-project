import React, { useState } from "react";
// import dropDown from "../assets/dropdown-icon.svg";
import locationIcon from "../assets/location-icon.svg";
import arrowUp from "../assets/keyboard_arrow_up.svg";
import arrowDown from "../assets/keyboard_arrow_down.svg";

const LocationDropDownFN = () => {
  const [isClicked, setIsClicked] = useState(false);
  // function toggleArrow() {
  //   isclicked ? setIsClicked(false) : setIsClicked(true);
  const [selectedLocation, setSelectedLocation] = useState("Location");

  const handleSelectedLocation = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <>
      {/* div for location icon, location, location-drop-down*/}
      <div
        className="dropdown dropdown-center "
        tabIndex={0}
        role="button"
        onClick={() => setIsClicked(isClicked)}
      >
        <form>
          <div className="flex items-center bg-transparent ">
            <img
              className="w-auto h-auto pr-2"
              src={locationIcon}
              alt="location icon"
            />
            <h4 className="text-[#F0F0F0] text-[13px] hidden lg:inline-block md:text-[12px] font-[500]">
              {selectedLocation}
            </h4>
            <div role="button" className="bg-transparent m-1" tabIndex={0}>
              <img
                src={isClicked ? arrowUp : arrowDown}
                alt="drop-down-img"
                className="cursor-pointer w-full "
              />

              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-auto p-2 shadow-sm"
              >
                <li className="hover:text-red-600">
                  <label id="location1">
                    Lagos{" "}
                    <input
                      type="radio"
                      name="location"
                      value="Lagos"
                      id="location1"
                      onChange={handleSelectedLocation}
                    />
                  </label>
                </li>
                <li className="hover:text-red-600">
                  <label className="" id="location2">
                    Abuja{" "}
                    <input
                      type="radio"
                      name="location"
                      value="Abuja"
                      id="location2"
                      onChange={handleSelectedLocation}
                    />
                  </label>
                </li>
                <li className="hover:text-red-600">
                  <label id="location3">
                    Benin{" "}
                    <input
                      type="radio"
                      name="location"
                      value="Benin"
                      id="location3"
                      onChange={handleSelectedLocation}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LocationDropDownFN;
