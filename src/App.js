import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Component/CakeContainer";
import HooksCakeContainer from "./Component/HooksCakeContainer";
import IceCreamContainer from "./Component/IceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <CakeContainer /> */}
        <HooksCakeContainer/>
        <IceCreamContainer/>
      </div>
    </Provider>
  );
}

export default App;
