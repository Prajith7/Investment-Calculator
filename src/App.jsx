import { useState } from "react"
import UserInput from "./components/UserInput"
import Result from "./components/Result"

function App() {
  const [userInput , setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment:1200,
    expectedReturn :6,
    duration:10
})

function handleChange(inputIdentifier , newValue){
    setUserInput((prevUser)=>({
      ...prevUser,
      [inputIdentifier] : +newValue
    })
    
    )
}
  return (
    <>
     <div id='header'>
        <header>
        <img src="./src/assets/investment-calculator-logo.png" alt="'logo" />
        <h1>React Investment Calculator</h1>
      </header>
    </div>
    <UserInput userInput={userInput} handleChange={handleChange}/>
    <Result userInput={userInput} />
    </>
   
  )
}

export default App
