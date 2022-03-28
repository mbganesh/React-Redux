import React from "react";
import { useSelector ,  useDispatch} from "react-redux";
import { increment , decrement , handleLogged } from "./actions";

function App() {
  const counter = useSelector((state) => state.counter);

  const isLogged = useSelector((state) => state.isLogged);

  const dispatch = useDispatch()

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#404040",
          margin:'0px 50px 0px',
          border:'1px solid #010101',
          borderRadius:'10px',
          padding:'0.5%'
        }}
      >
        <h2 style={{ textAlign: "center" , color:'white' , whiteSpace:'nowrap'}}>Redux_Counter : {counter}</h2>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <button onClick={()=> dispatch(increment())} style={{ flex: 1,margin:'0.5%' ,padding: "2%" , fontWeight:'bolder' ,color:'#404040' ,fontSize:'30px' , borderRadius:'10px' }}> + </button>
          <button onClick={()=>dispatch(decrement())} style={{ flex: 1,margin:'0.5%' ,padding: "2%" , fontWeight:'bolder' ,color:'#404040' ,fontSize:'30px' , borderRadius:'10px' }}> - </button>
        </div>
      </div>

      {/* <button  onClick={() => dispatch(handleLogged(true ))}> {isLogged ? "Logout" : "Login"} </button> */}
    </div>
  );
}

export default App;
