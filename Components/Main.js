// import React from 'react';
// import Button from './Button';
// import ButtonGroups from './ButtonGroups';
// import Name from './Name';
// import QuizTopicButton from './QuizTopicButton';

// const Main = ({Component, pageProps}) => {
//     return (
//         <div className=" items-stretch max-h-screen">
//     <div className='h-10 bg-blue-500 '>
//       <h1 className='text-white font-bold text-center '>DEMO ONLINE TEST</h1>
//     </div>

//     <div className=' flex '>
//       <div className="flex-1">



//         <QuizTopicButton></QuizTopicButton>

//         <div className="rounded-md h-5/6 ml-1">

        
//           <div className="flex rounded-md justify-between bg-blue-500 px-2 text-white
//           ">
//             <div>Q No:1</div>
//             <div className="p-1">View in: <select className="text-black">
//               <option>English</option>
//               <option>Hindi</option>

//             </select></div>
//           </div>
//           <div className="px-2 bg-white  h-full">
//           <Component  {...pageProps} />
            




//           </div>

//         </div>
//         <div>

//         </div>





//       </div>




//       <div className="flex-none my-1 mx-2 w-72">

//         <div className="flex justify-center h-40 bg-cyan-400 rounded-md  ">
//           <div>
//             <img src="">
//             </img>
//           </div>
//         <Name></Name>
//         </div>
//         <div className="h-80 my-1 bg-blue-500 rounded-md">
//           <h1 className="text-white font-bold p-1">Question pallete </h1>
//           <Button></Button>

//         </div>
//         <div className="h-24 my-1 bg-blue-500  place-content-start rounded-md ">
//           <h1 className="text-white font-bold p-1">Legend(Click to view) </h1>
//           <div className="grid grid-cols-2 gap-1 bg-cyan-400">
//             <div className="px-2 bg-green-500 ">1 Answer</div>
//             <div className="px-2 bg-red-600 ">2 Answer</div>
//             <div className="px-2 bg-purple-700 ">1 Review Answer</div>
//             <div className="px-2 bg-yellow-300 ">1 Review Answer</div>
//             <div className="px-2 bg-slate-300 ">3 Dump Anwer</div>
//             <div className="px-2 bg-white ">No Visit</div>
//             <div className="px-2 bg-blue-600 col-span-2 text-center">10 All Answers</div>
//             <div className=" col-span-2 mt-2 bg-cyan-400 grid grid-cols-2 gap-1 p-1">
//               <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Profile</button>
//               <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Instr</button>
//               <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Questions</button>
//               <button className="border  drop-shadow-sm border-1 rounded-md bg-blue-400 text-white dont-semibold">Submit</button>


//             </div>
//           </div>

//         </div>



//       </div>





//     </div>
//    <ButtonGroups></ButtonGroups>

//     <div className=" h-fit bg-slate-500 ">
//       <h1 className='text-white font-bold text-center'>@Admin</h1>
//     </div>
//   </div>
//     );
// };

// export default Main;

// export const getStaticProps = async()=> {
//     const res = await fetch('https://openapi.programming-hero.com/api/quiz');
//     const data = await res.json()
//     console.log(data);
//     return {
//       props:{
//         posts: data
//       }
//     }
//   }

  