import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ForgetPassword from "./Pages/ForgetPassword";
import Dashboard from "./Pages/Dashboard";
import "./App.css";

function App() {
	return (
		<>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<SignUp />} />
						<Route
							path="/forgetPassword"
							element={<ForgetPassword />}
						/>
						<Route path="/dashboard" element={<Dashboard />} />
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
