import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setData, addTable } from "../redux-toolkit/tableData";

function Ex2() {

  const { data, gmail, firstName, lastName} = useSelector((state) => state.table);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    dispatch(setData({ name: event.target.name, value: event.target.value }));
    console.log(`${event.target.name}: `, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addTable());
  };

  return (
    <div>
      <form class="space-y-4 text-gray-700">
        <div class="flex flex-wrap">
          <div class="w-full">
            <label class="block mb-1 text-slate-300">
              Email
            </label>
            <input
              class="border-2  border-cyan-600 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              type="email"
              name="gmail"
              id="gmail"
              value={gmail}
              onChange={handleChange}
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-2 space-y-4 md:space-y-0">
          <div class="w-full px-2 md:w-1/2">
            <label class="block mb-1 text-slate-300">
              First name
            </label>
            <input
              class="border-2  border-cyan-600 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={handleChange}
            />
          </div>
          <div class="w-full px-2 md:w-1/2">
            <label class="block mb-1 text-slate-300" >
              Last name
            </label>
            <input
              class="border-2  border-cyan-600 bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
      <button
        type="button"
        class="mt-6 shadow-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        onClick={handleSubmit}
      >
        Submit
      </button>

      <div className="mt-4">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Gmail
                </th>
                <th scope="col" class="px-6 py-3">
                  First Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Last Name
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map(data =>(
                <tr key={data.firstName} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.gmail}
                </th>
                <td class="px-6 py-4">{data.firstName}</td>
                <td class="px-6 py-4">{data.lastName}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Ex2;
