import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import navbar from "scenes/navbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {LoginPage} />
          <Route path = "/home" element = {HomePage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
