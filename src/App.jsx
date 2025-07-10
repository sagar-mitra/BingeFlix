import React from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="font-helveticaBold">
        <Body />
      </div>
    </Provider>
  );
};

export default App;
