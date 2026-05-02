import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GymPage from "./pages/GymPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gym/:slug" element={<GymPage />} />
      </Routes>
    </Router>
  );
}

export default App;