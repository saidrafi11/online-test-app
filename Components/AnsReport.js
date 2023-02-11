import { paginationContext } from '@/pages/Context/PageContext';
import React, { useContext } from 'react';

const AnsReport = () => {
    const { dumpAnswer, reviewAnswer, currentPage, dataLength, setShowAnswer, setPagenumbers } = useContext(paginationContext)
    console.log(currentPage);
    const totalQ = dataLength
    const noVisit = totalQ - currentPage;

const handleShowAnswer = ()=>{
setShowAnswer(true)
setPagenumbers([])
}

    return (
        <div className="h-24 my-1 bg-blue-500  place-content-start rounded-md ">
            <h1 className="text-white font-bold p-1">Legend(Click to view) </h1>
            <div className="grid grid-cols-2 gap-1 bg-cyan-400">
                <div className="px-2 bg-green-500 ">1 Answer</div>
                <div className="px-2 bg-red-600 ">2 Answer</div>
                <div className="px-2 bg-purple-700 ">{reviewAnswer} Review Answer</div>
                <div className="px-2 bg-yellow-300 ">{reviewAnswer} Review Answer</div>
                <div className="px-2 bg-slate-300 ">{dumpAnswer} Dump Anwer</div>
                <div className="px-2 bg-white ">{noVisit} No Visit</div>
                <div onClick={()=>{handleShowAnswer()}} className="px-2 bg-blue-600 col-span-2 text-center">10 All Answers</div>


                <div className=" col-span-2 mt-2 bg-cyan-400 grid grid-cols-2 gap-1 p-1">
                    <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Profile</button>
                    <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Instr</button>
                    <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Questions</button>
                    <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Submit</button>


                </div>
            </div>

        </div>
    );
};

export default AnsReport;