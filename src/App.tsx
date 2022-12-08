import Heading from "./Components/Heading";
import React from "react";
import PageFirst from "./Components/PageFirst";

function App()  {

  // const elem = React.createElement("div", {greeting: 'Hello'}, `Djordje world`)
  // console.log(elem)

  return (
    <div className="App">
      <Heading text={"TypeScript + Composition"} style={{fontSize: '4rem'}}/>
        <PageFirst />
    </div>
  )
}

export default App
