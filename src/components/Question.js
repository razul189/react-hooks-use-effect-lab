import React, {useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    if (timeRemaining === 0){
      setTimeRemaining(10)
      onAnswered(false)
      return
    }
  const timerId = setTimeout (() => {
    setTimeRemaining ((timeRemaining) => timeRemaining - 1)
  }, 1000)

  return function () {
    clearTimeout(timerId)
  }

  }, [timeRemaining, onAnswered])

  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;


// import React, { useEffect, useState } from "react";

// function Question({ question, onAnswered }) {
//   const [timeRemaining, setTimeRemaining] = useState(10);

//   useEffect(() => {
//     if (timeRemaining === 0) {
//       setTimeRemaining(10) 
//       onAnswered(false)
//       return
//     }
//     // The effect runs when the component mounts and every time `timeRemaining` changes.
//     const timer = setTimeout(() => {
//       setTimeRemaining((timeRemaining) => timeRemaining - 1);
//     }, 1000);

//     // Cleanup function: clears the timer when the component unmounts or when `timeRemaining` changes.
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [timeRemaining, onAnswered]);

//   function handleAnswer(isCorrect) {
//     setTimeRemaining(10);
//     onAnswered(true);
//   }

//   const { id, prompt, answers, correctIndex } = question;

//   return (
//     <>
//       <h1>Question {id}</h1>
//       <h3>{prompt}</h3>
//       {answers.map((answer, index) => {
//         const isCorrect = index === correctIndex;
//         return (
//           <button key={answer} onClick={() => handleAnswer(isCorrect)}>
//             {answer}
//           </button>
//         );
//       })}
//       <h5>{timeRemaining} seconds remaining</h5>
//     </>
//   );
// }

// export default Question;

