import { Route, Routes } from "react-router-dom";
import "./App.css";

import SharedLayout from "./pages/SharedLayout";
import MainPage from "./pages/MainPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="home" element={<Home />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
