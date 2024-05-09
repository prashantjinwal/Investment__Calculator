import { useState } from "react"
import Header from "./components/Header"
import Result from "./components/Result"
import UserInput from "./components/UserInput"

function App() {
  const [userInput, setuserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

 function handleChange (inputIdentifier , newValue){
    setuserInputs(prev=>{
      return{
        ...prev,
        [inputIdentifier]: +newValue,
      };
    })

  }
  return (
    <div>
      <Header/>
      <UserInput onChangeComp={handleChange} userInput={userInput}/>
      <Result Input={userInput} />
    </div>
  )
}

export default App
