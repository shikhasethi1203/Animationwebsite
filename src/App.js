// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/Home";
// import Search from "./pages/Search";
import SearchPage from "./pages/SearchPage";
import { Routes, Route } from "react-router-dom";

function App() {
  // BEM
  return (
    <div className="app">
      {/* <h1>Hey Programmer, let's bulid the Google Clone❤️‍🔥!</h1> */}
      <Routes>
        <Route exact path="/" element={<Home />} />

        {/* <Route path="/" element={<Search />} /> */}
        {/* <h1>This is the search page</h1> */}
        <Route exact path="/searchpage" element={<SearchPage />} />
      </Routes>
    </div>
  );
}

export default App;
