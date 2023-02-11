import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const QuizTopicButton = () => {
    const [data, setData] = useState(null);


    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/quiz');
        const json = await res.json();
        setData(json);
      };
      fetchData();
    }, []);
    return (
        <div className="px-1 my-2">
          <button className="w-fit hover:bg-blue-900 bg-blue-400 mx-1 px-3 rounded-sm text-white">All section</button>
          {
            data?.data.map(quizTopic => <Link href={`/${quizTopic.id}`} key={quizTopic.id} className="w-fit hover:bg-blue-900 bg-blue-400 px-3 rounded-sm mx-1 text-white">{quizTopic.name}</Link>)
          }

        </div>
    );
};

export default QuizTopicButton;