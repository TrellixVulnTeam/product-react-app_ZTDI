// import "./App.scss";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Route/index";
import store from "./redux/store/index";
import Header from "./containers/header/Header";
import React from "react";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Header />
          <Routes />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
