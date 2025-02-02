import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterWorker from "./pages/RegisterWorker";
import RegisterClient from "./pages/RegisterClient";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/src/pages/RegisterWorker.jsx" element={<RegisterWorker />} />
      <Route path="/src/pages/RegisterClient.jsx" element={<RegisterClient />} />
    </Routes>
  );
}

export default App;
