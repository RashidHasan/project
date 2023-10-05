import logo from "./logo.svg";
import "./App.css";
import Header from "./header";
import Main from "./main";
import Products from "./products";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <Main /> */}

      <Router>
        <Routes>
          <Route path="/" Component={Main}></Route>
          <Route path="/products" Component={Products}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
