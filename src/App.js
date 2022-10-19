import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Component/CakeContainer";
import HooksCakeContainer from "./Component/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
