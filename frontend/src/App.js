import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Dashborad from "./pages/Dashborad";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UpdateGaolForm from "./components/UpdateGoalForm";
// "proxy": "http://localhost:5000",
// import TaskDashboard from "./tasks/TaskDashboard";
function App() {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Dashborad />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/updategoal/:id" element={<UpdateGaolForm />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
