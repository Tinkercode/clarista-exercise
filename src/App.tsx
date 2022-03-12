import React, { useState } from "react";
import "./App.css";
import AddCandidate from "./components/add-candidate";
import UserTable from "./components/usertable";
import UserData from "./data.json";

const App: React.FC = () => {
  const [isMaleChecked, setIsMaleChecked] = useState(false);
  const [isFemaleChecked, setIsFemaleChecked] = useState(false);
  const [userData, setUserData] = useState(UserData);
  const [searchTerm, setSearchTerm] = useState("");
  const handleMaleCheck = () => {
    setIsMaleChecked(!isMaleChecked);
  };

  const handleFemaleCheck = () => {
    setIsFemaleChecked(!isFemaleChecked);
  };

  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value.trim());
  };

  return (
    <div className="mx-5 mt-5">
      <p className="text-4xl pt-3">Candidates</p>
      <div className="mt-4 pt-4 grid grid-cols-4">
        <div className="pt-2">
          <label>
            <input
              type="checkbox"
              id="male"
              name="male"
              value="Male"
              checked={isMaleChecked}
              onChange={handleMaleCheck}
              className="accent-green-600"
            />
            <span className="pl-2">Male</span>
          </label>
        </div>
        <div className="pt-2">
          <label>
            <input
              type="checkbox"
              id="female"
              name="female"
              value="Female"
              checked={isFemaleChecked}
              onChange={handleFemaleCheck}
              className="accent-green-600"
            />
            <span className="pl-2">Female</span>
          </label>
        </div>
        <div className="col-span-2">
          <input
            type="search"
            id="searchData"
            name="searchData"
            placeholder="What are you looking for?"
            className="w-full p-2 border-b-[1px] focus:outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="my-8 pt-8">
        <UserTable
          isMaleChecked={isMaleChecked}
          isFemaleChecked={isFemaleChecked}
          searchTerm={searchTerm}
          userData={userData}
        />
      </div>
      <AddCandidate userData={userData} setUserData={setUserData} />
    </div>
  );
};

export default App;
