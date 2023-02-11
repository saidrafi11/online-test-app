import { paginationContext } from '@/pages/Context/PageContext';
import React, { useContext } from 'react';

const ButtonGroups = () => {
    const {currentPage, setCurrentPage, setPagenumbers,dumpAnswer, setDumpAnswer,reviewAnswer, setReviewAnswer, dataLength}= useContext(paginationContext)
    const next = ()=>{
        
        setCurrentPage(currentPage+1)
        setPagenumbers([])
    }
    const dump = ()=>{
        setDumpAnswer(dumpAnswer+1)
        setCurrentPage(currentPage+1)
        setPagenumbers([])
    }
    const review = ()=>{
        setReviewAnswer(reviewAnswer+1)
        setCurrentPage(currentPage+1)
        setPagenumbers([])
    }
    const previous = ()=>{
        setCurrentPage(currentPage-1)
        setPagenumbers([])
       
    }

    return (
        <div className="px-1 my-2">
      <button className="w-fit bg-blue-400 px-3 rounded-sm hover:bg-blue-900 text-white mx-1">CLEAR RESPONSE</button>
      <button onClick={() => review()}  className="w-fit bg-blue-400 px-3 rounded-sm hover:bg-blue-900 text-white mx-1">REVIEW</button>
      <button onClick={() => dump()}  className="w-fit bg-blue-400 px-3 rounded-sm hover:bg-blue-900 text-white mx-1">DUMP</button>

      <button disabled={currentPage === 1} onClick={() => previous()} className="w-fit bg-blue-400 px-3 rounded-sm hover:bg-blue-900 text-white mx-1">PREVIOUS</button>

      <button disabled={dataLength===currentPage} onClick={() => next()} className="w-fit bg-blue-400 px-3 rounded-sm hover:bg-blue-900 text-white mx-1" >NEXT</button>
    </div>
    );
};

export default ButtonGroups;