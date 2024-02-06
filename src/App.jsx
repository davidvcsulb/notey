import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUpIn from "./pages/SignUpIn";

function App() {
  return (
    <>
      <BrowserRouter>
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
