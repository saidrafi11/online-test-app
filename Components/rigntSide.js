import React from 'react';

const rigntSide = () => {
    return (
        <div className="flex-none my-1 mx-2 w-72">

        <div className="flex justify-center h-40 bg-cyan-400 rounded-md  ">
          <div>
            <img src="">
            </img>
          </div>
        <Name></Name>
        </div>
        <div className="h-80 my-1 bg-blue-500 rounded-md">
          <h1 className="text-white font-bold p-1">Question pallete </h1>
          <div className="px-2 bg-cyan-400 h-full grid grid-cols-5 gap-1 place-content-start">

            <button className=" w-13 h-fit bg-slate-300 border border-black px-1">1</button>
            



          </div>

        </div>
        <div className="h-24 my-1 bg-blue-500  place-content-start rounded-md ">
          <h1 className="text-white font-bold p-1">Legend(Click to view) </h1>
          <div className="grid grid-cols-2 gap-1 bg-cyan-400">
            <div className="px-2 bg-green-500 ">1 Answer</div>
            <div className="px-2 bg-red-600 ">2 Answer</div>
            <div className="px-2 bg-purple-700 ">1 Review Answer</div>
            <div className="px-2 bg-yellow-300 ">1 Review Answer</div>
            <div className="px-2 bg-slate-300 ">3 Dump Anwer</div>
            <div className="px-2 bg-white ">No Visit</div>
            <div className="px-2 bg-blue-600 col-span-2 text-center">10 All Answers</div>
            <div className=" col-span-2 mt-2 bg-cyan-400 grid grid-cols-2 gap-1 p-1">
              <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Profile</button>
              <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Instr</button>
              <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Questions</button>
              <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Submit</button>


            </div>
          </div>

        </div>



      </div>
    );
};

export default rigntSide;