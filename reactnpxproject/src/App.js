import Button from "./Button.js";
import yyyyy from "./XXX.module.css";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {setValue(prev => prev+1);}
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick} > click me </button>
    </div>
  );
  // return (
  //   <div>
  //     <h1 className={yyyyy.title}>Welcome back to react</h1>
  //     <Button onClick={onClick} text={"create"}/>
  //   </div>
  // );
}

export default App;
