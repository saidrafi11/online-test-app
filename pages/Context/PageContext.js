import React, { createContext, useState } from 'react';
export const paginationContext = createContext();
const PageContext = ({children}) => {
    // const [pageNumber, setPagenumber] = useState(0);
    const [pageNumbers, setPagenumbers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataLength, setDataLength] = useState(0)
    const [dumpAnswer, setDumpAnswer] = useState(0)
    const [reviewAnswer, setReviewAnswer] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false)
   
    // const [number, setNumber] = useState(0);

    const submit =(event)=>{
        event.preventDefault()
    }



    const elements = {pageNumbers,setPagenumbers,  currentPage, setCurrentPage, setDataLength , dataLength, submit,dumpAnswer, setDumpAnswer, reviewAnswer, setReviewAnswer, showAnswer, setShowAnswer}
    return (
        <paginationContext.Provider value={elements}>
            {children}
        </paginationContext.Provider>
    );
};

export default PageContext;