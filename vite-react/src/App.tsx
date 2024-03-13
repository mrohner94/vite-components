import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Input } from "vite-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Input />
      <Button dangerous>Button</Button>
    </>
  );
}

export default App;
