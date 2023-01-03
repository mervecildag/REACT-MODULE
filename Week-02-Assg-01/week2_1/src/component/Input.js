 const Input = () => {
   return (
     <div className="input-group">
      <div data-testid = "input" >
        <input type="text" className="form-control border border-info"  aria-describedby="button-addon2"></input>
      </div>
      <div data-testid = "button" >
        <button className="btn btn-outline-secondary text-white bg-info" type="button" id="button-addon2">Add Todo</button>
      </div>
     </div>
   );
 }
 export default Input;
