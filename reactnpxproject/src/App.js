import { func } from "prop-types";
import {useState, useEffect} from "react";

function Hello(){
    useEffect(()=>{
        console.log("created ! :)");
        return( ()=> console.log("destroyed"));
    },[])
    return(
        <h1>Hello</h1>
    )
}

function App() {
    const [showing, setShowing] = useState(false);
    const onClick = () =>{
        setShowing((prev) => !prev);
    }
    return (
    <div>
        <button onClick={onClick}>{showing ? "hide" : "Show" }</button>
        {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
