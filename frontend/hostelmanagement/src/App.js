import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/survey/SurveyPage";
import Signup from "./components/signup/SignupPage";
import Login from "./components/login/LoginPage";
import RoomrecommendPage from "./components/roomrecommend/RoomrecommendPage";


function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/recommended" exact element={<RoomrecommendPage />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;