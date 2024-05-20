import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App(){
  return (
    <div>
      <Steps />
      <Steps />
      {/* <Counter /> */}
    </div>
  )
}

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [stepDay, setStepDay] = useState(1);

//   const date = new Date("june 21 2027")
//   date.setDate(date.getDate() + count)

//   return (
//     <>
//     <div className="test">
//       <div>
//         <button onClick={() => setStepDay((c) => c - 1)}>-</button>
//         <span>Step: {stepDay}</span>
//         <button onClick={() => setStepDay((c) => c + 1)}>+</button>
//       </div>
//     </div>
//     <div className="test">
//       <div>
//         <button onClick={() => setCount((c) => c - stepDay)}>-</button>
//         <span>Count: {count}</span>
//         <button onClick={() => setCount((c) => c + stepDay)}>+</button>
//       </div>
//     </div>

//     <p className="test">
//       <span>{count === 0 ? "Today is" : count > 0 ? `${count} days from today is` : `${Math.abs(count)} days ago was `}</span>
//       <span>{date.toDateString()}</span>
//     </p>
//     </>
//   )

// }



function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious(){
    if(step > 1) setStep((s) => s - 1);
  }
  function handleNext(){
    if(step < 3) setStep((s) => s + 1);
  }

  return (
    <div>
      <button className="close" onClick={()=>setIsOpen((is) => !is)}>&times;</button>

      { isOpen && (
        <div className="steps">
        <div className="numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>

        <p className="message">
          Step {step}: {messages[step - 1]}
        </p>

        <div className="buttons">
          <button onClick={handlePrevious} style={{ backgroundColor: "#7950f2", color: "#fff" }}>
            Previous
          </button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      )}
    </div>
  );
}


