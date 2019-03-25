import React, { FC, useState } from "react";
import ClassComponent from "./components/ClassComponent";
import JsComponent from "./components/JsComponent";

export interface IAppProps {
  header: string;
  initialCount: number;
}

const App:FC<IAppProps> = (props: IAppProps) => {
  const [count, setCount] = useState(props.initialCount);
  const handleClick = () => setCount(count+1);
  return (
    <main className="container">
      <h1>{props.header}</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increment</button>
      <JsComponent name="JsComponent" />
      <ClassComponent isLoaded={true} someNumber={20} />
    </main>
  )
};
export default App;