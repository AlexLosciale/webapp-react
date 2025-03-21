import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import FilmDetail from "./components/FilmDetail";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
