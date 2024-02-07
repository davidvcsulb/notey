import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpIn from "./pages/SignUpIn";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route index element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/register" element={<SignUpIn></SignUpIn>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
