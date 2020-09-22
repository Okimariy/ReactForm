import React from "react";
import StepperPage from "./Components/StepperComponent";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <StepperPage />
      </RecoilRoot>
    </div>
  );
}

export default App;
