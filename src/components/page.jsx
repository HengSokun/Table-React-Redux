import React from "react";
import Ex1 from "./Ex1";
import Ex2 from "./Ex2"
const Page = () => {
  return (
    <div className="bg-[url('img/night-mountains.jpg')] h-screen bg-no-repeat bg-cover">
      <div className="ml-16 mr-16 px-12 pt-5 w-auto ">
        <Ex1/>
        <hr className="border border-zinc-950 p-1 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 mt-4 mb-4 rounded"/>
      </div>
      
      <div className="ml-16 mr-16 px-12 pt-0 ">
        <Ex2/>
      </div>

    </div>
  );
};

export default Page;
