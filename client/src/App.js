import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import MainApp from "scenes/app";
import LoginPage from "scenes/loginPage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<LoginPage/>}/>
          <Route path = "/app" element = {<MainApp/>}/>
          <Route path = "/homepage" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
