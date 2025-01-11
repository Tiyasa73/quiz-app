import React, { useRef, useState } from "react";
function Quiz(){
  const Data=[
    {
       question:"What is React js?",
       option1:"React js is a css framework",
       option2:"React js is a javaScript library",
       option3:"React js is a database Management",
       option4:"React js is a java framework",
       ans:2,
    },
    {
      question:"Which device is require for Internet connection?",
      option1:"Modem",
      option2:"Router",
      option3:"pen Drive",
      option4:"LAN cable",
      ans:1,
    },
    {
      question:"What is React hook?",
      option1:"A way to use state and other React features in functional components",
      option2:"A way to use state and other React features in class components",
      option3:"A way to use props and other React features in functional components",
      option4:"A way to use props and other React features in class components",
      ans:1,
    },
    {
      question:"What is the useState() hook used for?",
      option1:"To manage side effects",
      option2:"To manage state",
      option3:"To manage props",
      option4:"To manage context",
      ans:2,
    },
    {
      question:"What is React Routing?",
      option1:"A library for client-side routing",
      option2:"A library for server-side routing",
      option3:"A library for API routing",
      option4:"A library for database routing",
      ans:1,
    },
  ]
  let [index,setIndex]=useState(0);
  const [question,setQuestion]=useState(Data[index]);
  const [lock,setLock]=useState(false);
  const [score,setScore]=useState(0);
  const[result,setResult]=useState(false);
  const option1=useRef(null);
  const option2=useRef(null);
  const option3=useRef(null);
  const option4=useRef(null);
  const option_array=[option1,option2,option3,option4];
   const checkAns=(e,ans)=>{
           if(lock===false){
            if(question.ans===ans){
              e.target.classList.add("correct");
              setLock(true);
              setScore((prev)=>prev+1);
              
            }
            else{
              e.target.classList.add("wrong");
              setLock(true);
              option_array[question.ans-1].current.classList.add("correct");
            }
     }
           }
           const next=()=>{
              if(lock===true){
                if(index===Data.length-1){
                  setResult(true);
                  return 0;
                }
                setIndex(++index);
                setQuestion(Data[index]);
                setLock(false);
                option_array.map((option)=>{
                    option.current.classList.remove("correct");
                    option.current.classList.remove("wrong");
                    return null;
                });
              }
           }
          const handleReset=()=>{
              setIndex(0);
              setQuestion(Data[0]);
              setScore(0);
              setLock(false);
              setResult(false);
          }

           
         
  return(
 <>
 <div className="container">
   <h1>Quiz App</h1>
   <hr/>
   {result?<></>:<><h2> {index+1}.{question.question}</h2>
   <ul>
    <li ref={option1} onClick={(e)=>{checkAns(e,1)}}>{question.option1}</li>
    <li ref={option2}onClick={(e)=>{checkAns(e,2)}}>{question.option2}</li>
    <li ref={option3}onClick={(e)=>{checkAns(e,3)}}>{question.option3}</li>
    <li ref={option4} onClick={(e)=>{checkAns(e,4)}}>{question.option4}</li>
   </ul>
   <button onClick={next}>Next</button>
   <div className="item">{index+1} page of {Data.length}</div> </>}
   {result?<><h2>You scored {score} out of {Data.length}</h2>
   <button  onClick={handleReset}>Reset</button></>:<></>}
   </div>
 </>
  );
}
export default Quiz;