import Homepage from "./assets/components/HomePage/home";
import Login from "./assets/components/login/login";
import { Route, Routes } from "react-router-dom";
function App() {
  return (

      <Routes>
        <Route path="/bisc-sloder" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}

export default App;
