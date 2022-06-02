import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
