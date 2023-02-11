import PageContext, { paginationContext } from '@/pages/Context/PageContext';
import React, { useContext, useState } from 'react';

const Button = () => {
    const { pageNumbers, setPagenumbers, dataLength } = useContext(paginationContext)
    const [postsPerPage, setPostPerPage] = useState(1);
    const [dynamicClass, setDynamicClass] = useState('bg-blue-900');
    

    
    for (let i = 1; i <= Math.ceil(dataLength / postsPerPage); i++) {

        pageNumbers.push(i)

    }

   
    console.log('pgee', pageNumbers);
    return (
        <div className="px-2 bg-cyan-400 h-full grid grid-cols-5 gap-1 place-content-start">
            {
                pageNumbers?.map(p => <button key={p} id={p} className={` w-13 h-fit bg-slate-300 border border-black px-1${dynamicClass}`}>{p}</button>)
            }





        </div>
    );
};

export default Button;