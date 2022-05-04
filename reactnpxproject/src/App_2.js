import {useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const onClick = () => {setValue(prev => prev+1);}
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("CALL THE API");
  }
  useEffect(iRunOnlyOnce, [])
  useEffect(()=>{
      if (keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
  }, [keyword])
  useEffect(()=>{
    if (keyword !== "" && keyword.length > 5){
    console.log("I run when keyword & counter changes");
  }
}, [keyword, counter])
useEffect(()=>{
  if (keyword !== "" && keyword.length > 5){
  console.log("I run when keyword changes");
}
}, [keyword])
useEffect(()=>{
  if (keyword !== "" && keyword.length > 5){
  console.log("I run when counter changes");
}
}, [counter])
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
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
