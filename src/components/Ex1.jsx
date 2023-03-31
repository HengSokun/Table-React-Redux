import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateInputValue } from "../redux-toolkit/arrayData";

function Ex1() {
  const data = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  function handleInputChange(event) {
    dispatch(updateInputValue(event.target.value));
    console.log("handleInputChange: ", event.target.value);
  }

  return (
    <div>
      <div className="border-2  border-cyan-600 rounded-lg shadow-slate-800 ">
        <input
          type="text"
          id="first_name"
          class="border-2  border-cyan-600 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="Heng"
          value={data}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="text-left mt-3">
        <div class="border-2  border-cyan-600 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ">
          <span className="text-base font-bold bg-clip-text bg-gradient-to-r  text-transparent  from-green-200 via-green-300 to-blue-500">Value: {""}</span>
          <span className="text- font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-lime-300">
            {data}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Ex1;
