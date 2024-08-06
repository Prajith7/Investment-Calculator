export default function UserInput({ userInput, handleChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InputsHandle 
          label="Initial Investment" 
          inputs='initialInvestment'
          userInput={userInput} 
          handleChange={handleChange} 
        />
          <InputsHandle 
          label="Annual Investment" 
          inputs='annualInvestment'
          userInput={userInput} 
          handleChange={handleChange} 
        />
      </div>
      
      <div className="input-group">
        <InputsHandle
        label = "Expected Return"
        inputs='expectedReturn'
        userInput={userInput}
        handleChange={handleChange}
        />
         <InputsHandle 
         label="Duration"
         inputs="duration"
         userInput={userInput}
         handleChange={handleChange} />
      </div>
    </section>
  );
}

function InputsHandle({ label, userInput, handleChange, inputs}) {
 
  return (
    <p>
      <label>{label}</label>
      <input
        type='number'
        value={userInput[inputs]}
        onChange={(e) => handleChange(inputs, e.target.value)}
      />
    </p>
  );
}