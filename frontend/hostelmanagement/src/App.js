import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/survey/SurveyPage";
import Signup from "./components/signup/SignupPage";
import Login from "./components/login/LoginPage";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{<Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;