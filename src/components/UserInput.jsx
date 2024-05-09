


function UserInput({ onChangeComp, userInput }) {


  return (
    <section id="user-input" >
     <div className="input-group">
        {/* Initial Investment */}
        <p>
            <label>Initial Investment</label>
            <input 
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onChangeComp('initialInvestment', event.target.value)}

             />
        </p>
        {/* Annual Investment */}
        <p>
            <label>Annual Investment</label>
            <input 
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChangeComp('annualInvestment', event.target.value)}
             />
        </p>
        
        {/* Expected Return */}
        <p>
            <label>Expected Return</label>
            <input 
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChangeComp('expectedReturn', event.target.value)}
             />
        </p>
        
        {/* Duration */}
        <p>
            <label>Duration</label>
            <input 
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeComp('duration', event.target.value)}
             />
        </p>
        

     </div>
    </section>
  )
}

export default UserInput
