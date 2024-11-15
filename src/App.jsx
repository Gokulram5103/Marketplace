import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HomePage from "./pages/Homepage";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./utils/Authcontext";
import Header from "./components/ui/Header";

function App() {
  return (
    <Router>
      <AuthProvider>
      <Header/>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
