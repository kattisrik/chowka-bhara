import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import Game from "./pages/Game";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="game/:id" element={<Game />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
