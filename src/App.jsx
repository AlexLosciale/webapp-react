import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import SearchPage from "./components/SerchPage";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
