import { useRouter } from 'next/router';
import React, { useContext, useEffect, useReducer, useState } from 'react';
import { paginationContext } from './Context/PageContext';



const sectionId = () => {
    const router = useRouter()

    const sectionId = router.query.sectionId;
    const { pageNumbers, currentPage, setCurrentPage, setDataLength, setPagenumbers, showAnswer,  } = useContext(paginationContext)

    const [data, setData] = useState(null);
    console.log(data);

    const [postsPerPage] = useState(1);

    useEffect(() => {
      
        const fetchData = async () => {
            
            const res = await fetch(`https://openapi.programming-hero.com/api/quiz/${sectionId}`);
            const json = await res.json();
            setData(json);


        };
        fetchData();
        
    }, [sectionId]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data?.data.questions.slice(indexOfFirstPost, indexOfLastPost)
    const dataLength = data?.data?.questions?.length;
    setDataLength(dataLength)


    console.log(currentPage, currentPosts);


    const paginate = (pageNumber) => {
        setPagenumbers([])
        setCurrentPage(pageNumber)
    }

    const initialState = {
        currentPage: '',
    }

    const reducer = (state, action) => {
        console.log(state, action);
        if (action.type === 'INPUT') {

            return {
                ...state,
                [action.payload.name]: action.payload.value

            }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)
    const submit = (event) => {
        event.preventDefault()

    }


    return (


        <div className="flex h-full  lg:justify-center w-full">

            <div className=" w-1/2 text-start border border-gray-300 px-2 "><h1 className="text-blue-600 font-semibold">Question Instruction</h1>
                <hr />
               


            </div>

            {
                showAnswer? <div>
 {
                    data?.data.questions.map(q => <div className='my-2 overflow-auto '>
                        <h1 className='text-red-600'>{q.question}</h1>
                        <h1 className='text-green-600 font-bold'>{q.correctAnswer
                        }</h1>
                    </div>)
                }
                </div>
                :
                <div className="w-1/2 text-start border border-gray-300 px-2">
                <h1 className="text-blue-600 font-semibold">Question</h1>
                <hr />
                <div>
                    <form >
                        <div >
                            <div>
                                {
                                    currentPosts?.map(Q =>
                                        <div className='m-2'>
                                            {Q.question}
                                            <hr />
                                            {
                                                Q.options.map(o =>
                                                    <div className='p-2'>
                                                        <input
                                                            type="radio"
                                                            id="red"
                                                            name={currentPage}
                                                            value={o}
                                                            onChange={(e) => {
                                                                dispatch({
                                                                    type: 'INPUT', payload: { name: e.target.name, value: e.target.value }
                                                                })
                                                            }}

                                                        />
                                                        <label > {o}</label>
                                                        <hr />
                                                    </div>
                                                )

                                            }

                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </form>


                </div>
                <div className="px-2 bg-cyan-400  grid grid-cols-5 gap-1 place-content-start">
                   



                </div>
            </div>

            }
            
        </div>

    );
};

export default sectionId;


