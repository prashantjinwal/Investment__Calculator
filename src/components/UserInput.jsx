
function UserInput() {
  return (
    <section id="user-input" >
     <div  className="input-group">
        {/* Initial Investment */}
        <p>
            <label>Initial Investment</label>
            <input 
            type="number"
            required

             />
        </p>
        {/* Annual Investment */}
        <p>
            <label>Annual Investment</label>
            <input 
            type="number"
            required
             />
        </p>
        
        {/* Expected Return */}
        <p>
            <label>Expected Return</label>
            <input 
            type="number"
            required
             />
        </p>
        
        {/* Duration */}
        <p>
            <label>Duration</label>
            <input 
            type="number"
            required
             />
        </p>
        

     </div>
    </section>
  )
}

export default UserInput
