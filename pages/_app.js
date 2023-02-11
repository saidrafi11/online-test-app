
import AnsReport from '@/Components/AnsReport';
import Button from '@/Components/Button';
import ButtonGroups from '@/Components/ButtonGroups';
import Name from '@/Components/Name';
import QuizTopicButton from '@/Components/QuizTopicButton';
import '@/styles/globals.css'

import PageContext from './Context/PageContext';




export default function App({ Component, pageProps }) {
  

  




  return <>
  <PageContext>
  
  <div className=" items-stretch max-h-screen">
    <div className='h-10 bg-blue-500 '>
      <h1 className='text-white font-bold text-center '>DEMO ONLINE TEST</h1>
    </div>

    <div className=' flex '>
      <div className="flex-1">



        <QuizTopicButton></QuizTopicButton>

        <div className="rounded-md h-5/6 ml-1">

        
          <div className="flex rounded-md justify-between bg-blue-500 px-2 text-white
          ">
            <div>Q No:1</div>
            <div className="p-1">View in: <select className="text-black">
              <option>English</option>
              <option>Hindi</option>

            </select></div>
          </div>
          <div className="px-2 bg-white  h-full">
          <Component  {...pageProps} />
            




          </div>

        </div>
        <div>

        </div>





      </div>




      <div className="flex-none my-1 mx-2 w-72">

        <div className="flex justify-center h-40 bg-cyan-400 rounded-md  h-fit">
          <div className='p-2 '>
            <img className='w-28 my-auto m-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6YpKK_3NOzq3on1DABdSQubO4g1Q5BJEK5cBgM0ARNO0RWIDfGti2i3Wrqyp8npsuXs&usqp=CAU">
            </img>
          </div>
        <Name></Name>
        </div>
        <div className="h-80 my-1 bg-blue-500 rounded-md">
          <h1 className="text-white font-bold p-1">Question pallete </h1>
          <Button></Button>

        </div>
        <AnsReport></AnsReport>



      </div>





    </div>
   <ButtonGroups></ButtonGroups>

    <div className=" h-fit bg-slate-500 ">
      <h1 className='text-white font-bold text-center'>@Admin</h1>
    </div>
  </div>

  </PageContext>
</>
  
  
  
  
}

export const getStaticProps = async()=> {
  const res = await fetch('https://openapi.programming-hero.com/api/quiz');
  const data = await res.json()
  console.log(data);
  return {
    props:{
      posts: data
    }
  }
}
