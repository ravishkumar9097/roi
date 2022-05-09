import "./index.css";
import { useState } from "react";

function App() {
  const [invest, setInvest] = useState();
  const [returnAmount, setReturnAmount] = useState();
  const [timeType, setTimeType] = useState();
  const [time, setTime] = useState();
  const [result,setResult] = useState();
  const calculateRoi = () => {

    if(invest && returnAmount && timeType && time){
      var profit = returnAmount - invest ;
      let roi = ((profit/invest)*100)/time;
      setResult(parseFloat(roi).toFixed(2))
     
    }else{
      alert("All Fields Are required")
    }


  };
  const clearAll = ()=>{
    setInvest("");
    setResult("");
    setReturnAmount("");
    setTime("");
    // console.log("clearing...")
  }
 
  return (
    
    <div className="App">
      <div className="row container mx-auto">
        <div className=" my-5 col-md-6">
          <h5 className="text-center">ROI CALCULATOR</h5>
          {/* <form> */}
          <div className="mb-3">
            <label  className="form-label">
              YOUR INVESTED AMOUNT
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={invest}
              onChange={(e) => {
                setInvest(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">
              RETURNED AMOUNT
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              value={returnAmount}
              onChange={(e) => {
                setReturnAmount(e.target.value);
              }}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <label  className="form-label">
                Time Type
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setTimeType(e.target.value)}
              >
                <option selected>select menu</option>
                <option value="Year">YEAR</option>
                <option value="Month">MONTH</option>
                <option value="Week">WEEK</option>
                <option value="Days">DAILY</option>
              </select>
            </div>
            <div className="mb-3 col-md-6">
              <label  className="form-label">
                Time in {timeType}
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputPassword1"
                value={time}
                onChange={(e) => {
                  setTime(e.target.value);
                }}
              />
            </div>
          </div>

          <button type="button" className="btn btn-primary my-5" onClick={()=>{calculateRoi()}}>
            Calculate ROI
          </button>
          <button type="button" className="btn btn-primary my-5 mx-4" onClick={()=>{clearAll()}}>
            Clear All
          </button>
          
          {/* </form> */}
          <div className="col-md-0 my-0">
          <h5 className="text-center">Result</h5>
                {result ? <h5 className="text-center">Your ROI is {result}% per {timeType}</h5>:""}
                </div>
         
         
        </div>
        
      </div>
    </div>
  );
}

export default App;
